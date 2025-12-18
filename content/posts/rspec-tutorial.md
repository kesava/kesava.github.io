---
title: "A tutorial on using RSpec and TDD"
date: "2012-04-24"
excerpt: "A comprehensive tutorial on RSpec and test-driven development, covering Guard, Spork, Growl integration, factories, Devise authentication, CanCan authorization, and common testing patterns for Rails applications."
tags: ["tutorial", "rspec", "tdd", "testing", "ruby", "rails"]
author: "Kesava"
---

This is an attempt to put together a comprehensive rspec tutorial including guard/spork/growl and later factories, associations, devise, cancan and some common testing patterns.

RSpec is a great tool in the test/behavior driven design process of writing human readable specifications that direct and validate the development of our application. We put the specifications (or specs) in a spec folder; we have one spec file for each class. We also have a spec_helper.rb that specifies basic test setup environment.

## Setup

In order to facilitate test driven development, we want to continuously monitor our app folder and run tests in the background as we continue to work on development of the application. We will use rspec along with Guard and spork towards this end. Guard is a command line tool to easily handle events on file system modifications. Spork is a server for testing frameworks that forks before each run to ensure a clean testing state. It's pretty easy to install Rspec, guard and spork. On the command line and run this:

`gem install rspec`

or include it as part of Gemfile

Gemfile contents to run rspec/guard/spork/growl

```ruby
group :development do
 gem 'rspec-rails'
 gem 'guard'
 gem 'guard-rspec'
end

group :test do
 gem 'rspec'
 gem 'growl'
 gem 'rb-fsevent'
 gem 'spork-rails'
 gem 'guard-spork'
end
```

and do

`bundle install`

Now download Mac OSX Growl here. Double click on the downloaded dmg file and install Growl. Relaunch the dmg file and click on the Extras folder, then click on growlnotify, and install it using the pkg file. Now, assuming that you have checked out the code and Rspec tests in place (in spec folder), type this in the terminal to initiate a Guardfile with the Guard for Rspec:

`bundle exec guard init rspec`

If you are running it for the first time, this creates a Guardfile, but since the codebase already consists of a Guardfile, it should just use it. Guardfile specifies what directories should be monitored for any modifications. Spec_helper specifies a few key things including -

* Required ruby classes to run tests, like rubygems, spork, factory_girl, webrat etc.
* What should the initial test load environment should look like, i.e. `spork.prefork`
* What should spork be loading for each fork i.e. `spork.each_run`


## A sample project
Now, let's set up a sample project. We're going to create two classes: Book and Library. Our Book objects will just store a title and author. Our Library object will store a list of books and allow us to fetch them by author.

### The Book class
Book probably has a model, controller and a view in the app folder. Similarly we would have a models, controllers and views sub folders in our spec folder. Further, we would have book_spec.rb in models folder, books_controller_spec.rb in controllers sub folder and corresponding spec files in views.

Let's start with tests for a Book model class.

Basic Book Class
```ruby
require 'spec_helper'
  describe Book do
end
```
This is how we start - with a describe block.

Our parameter to describe explains what we're testing: this could be a string, but in our case we're using the class name. Everything related to Book's model tests would go into this block. There is usually a before block that specifies initialization that needs to happen before every test. It reads something like this -

a before block
```ruby
before :each do
    @book = Book.new(:title => "Lorem Ipsum", :author => "John Doe")
end
```

Notice how we're making it an instance variable, by prepending the variable name with @. We need to do this so that our variable will be accessible from within our tests. Otherwise, we'll just get a local variable that's only good inside the before block.

Now, lets write our first test -
```ruby
describe "#new" do
  it "takes three parameters and returns a Book object" do @book.should be_an_instance_of Book
end
```

We're using a nested describe block here to say we're describing the actions of a specific method. You'll notice we've used the string #new; it's a convention in Ruby and often a best practice in rspec as it leads to better documentation when you run the tests.

Here, our test simply confirms that we're indeed made a Book object. Notice the grammar we use here: object.should do_something. Most tests take this form. You have an object and you start by calling should or should_not on the object. Then, you pass to that object the call to another function. In this case that's be_an_instance_of.

Since you have guard/spork/growl running in the background, growl should report that the test should fail. In TDD, you want to write just enough code to fix the test. So in this case, you can create book.rb under app/models which should create an instance of Book class.

```ruby
class Book
end
```

Growl should now pass the test as we can now create hollow Book objects. We should add more tests about title and author.
```ruby
describe "#title" do
  it "returns the correct title" do
      @book.title.should eql "Title"
  end
end
describe "#author" do
  it "returns the correct author" do
      @book.author.should eql "Author"
  end
end
```

The tests should fail again as the Book class doesn't have title and author attributes. You should go back to Book.rb and create a migration with author and title attributes and once you have done that your test should pass.

So that's the pretty much the core of TDD. Write a test (or few related tests), watch it fail, make it pass, refactor and repeat.

Let's spec out a little bit of Library class as well before we move onto Controller tests.

### The Library Class

Lets say we have just one library and our library has many books, in which case our library and books have a has_many relationship. Let's spec out the library test -

A basic Library spec
```ruby
require 'spec_helper'
describe 'Library object' do
    before :each do
        @library = [@book1 = Book.create("Javascript", "Douglas Crockford"),
           @book2 = Book.create("Rails Way", "Obie Fernandez"),
           @book3 = Book.create("Merb Way", "Obie Fernandez")]
    end

  context "#by_author" do
        it "returns all books by a author" do
          @library.by_author("Obie Fernandez").length.should == 2
      end
  end

  context "#add_book" do
      it "accepts new books" do
          @library.add_book(Book.new("Javascript Patterns", "Jane Eyre"))
          @library.length.should == 4
      end
  end
end
```

You should see all the tests fail and you can repeat the TDD process we discussed previously. But before we move any further, we want to learn about factories.

### Factories

Factories are replacement for fixtures with pretty straightforward syntax with support for multiple build strategies and class inheritance. This provides an excellent overview of how to get started with factories.

We can define our factories here as follows -

Factories for Library and Book
```ruby
Factory.define :library do |library|
  library.name                "City Library"
    library.location        "Springfield"
end

Factory.define :book do |book|
    book.title                 "Sample Title"
    book.author                "John Doe"
    book.association         :library #belongs_to library relationship
end
```

From here onwards, you dont have to write down verbose Book.new every time you want a new Book object. You want to use factories to write something like

Factories for Library and Book
```ruby
@book = Factory.create(:book)
```

If you want to book attributes hash with just title but no author, you can do something like

merge attributes
```ruby
attrs = Factory.build_attributes_for(:book).merge({:author => ''})
```

You can use sequences, fakers etc to model more realistic looking fake objects. Refer to sequence and faker documentation for how-to.

### Books Controller
You want to make sure most of your Book related tests go into the model spec code, because thats where you get your most bang for buck. Controller specs usually test for basic http verbs/actions. If your controllers do any thing more than that, it probably needs to be moved to models to keep in line with 'fat models and skinny controller' paradigm.

Here's how books_controller_spec.rb could look like -

books_controller_spec.rb
```ruby
require 'spec_helper'

describe UsersController do
  context '#index' do
        it "has the correct template" do
            get :index
            response.should be_success
            response.should render_template(:index)
        end

        it "gets list of all books" do
            @book1 = Factory.create(:book)
            @book2 = Factory.create(:book)
            @book3 = Factory.create(:book)

          get :index
            assigns(:books).length.should == 3
        end
    end
end
```

Controller specs come with three variables `@response`, `@request` and `@somethingelse`. HTTP verb actions can be written as follows -

Common HTTP actions in controller testing
```ruby
get :index
get :show, {:id => @book.id}
post :create, {:title => "Sample", :author => "John Doe"}
```

After the request is made, the response variable gets assigned the http response. You could check the status or read the body or do many other response related actions.

### Devise tests
Lets say you need a membership to access the library and you have decided to use devise for authentication. Your controllers now restrict access to models unless you are an authorized user. When you add devise authentication to your application_controller, the controller tests would simply redirect to a login page instead of behaving as expected.

Devise specifies how to test controllers and views here.

We could do define the required login method as a macro so that we can reuse it as part of our controller specs.

Login Macros for Devise
```ruby
module ControllerMacros
 def login_user
   before(:each) do
     @request.env["devise.mapping"] = Devise.mappings[:user]
     @user = Factory.create(:user)
     sign_in @user
   end
 end
end
```

We now need to extend the above macro as part of `spec_helper`

rspec config for login macros
```ruby
RSpec.configure do |config|
...
 config.include Devise::TestHelpers, :type => :controller
 config.extend ControllerMacros, :type => :controller
end
```

The controller tests should now be able to login as a valid user and the tests should behave as expected.

### CanCan tests
Now lets say, you have two different user roles - librarian and a member. You could use STI to define the roles and CanCan to define the abilities of each role. CanCan requires you to define abilities for the roles in ability.rb.

ability.rb is the only place where all the role logic is defined. All the controllers now do is verify against the rules specified in ability.rb. So, the best testing strategy seems to be test the regular controllers as say :admin role and specify a whole different set of tests for ability.rb.

Using factories to define librarian and user roles -

Factories for Librarian and Member user roles
```ruby
Factory.define :user do |user|
    user.first_name              "John"
    user.last_name               "Doe"
    user.email                   "test@example.com"
    user.password                "pass123"
    user.password_confirmation   "pass123"
end

Factory.define :librarian, :parent => :user do |user|
    user.type                    "Librarian"
end

Factory.define :member, :parent => :user do |user|
    user.type                    "Member"
end
```

The devise macro can now be rewritten as

Login macro to login as a librarian
```ruby
module ControllerMacros
 def login_librarian
   before(:each) do
     @request.env["devise.mapping"] = Devise.mappings[:user]
     @lib = Factory.create(:librarian)
     sign_in @lib
   end
 end
end
```

Controllers can now include login_librarian as part of their before block so that tests will have valid session to test with.

### Ability tests
You want to verify whether you have really specified the role-rules you think you did, so its important test the rules specified in ability.rb. It is also important to keep in mind that the tests are not against CanCan, but they should be against the rules specified in ability.rb. The tests could look something like this -

Testing against ability.rb
```ruby
require "cancan/matchers"

describe Ability do
  before(:each) do
  end
  [Library, Book].each do |model|
    it "should allow any member to read a #{model.to_s} details but not delete them" do
      user= Factory(:member)
      ability = Ability.new(user)
      ability.should be_able_to(:show, model.new)
      ability.should_not be_able_to(:delete, Factory(model.to_s.underscore.to_sym))
    end
  end

  [Library, Book].each do |model|
    it "should allow any librarian user to delete a #{model.to_s} " do
      user= Factory(:librarian)
      ability = Ability.new(user)
      ability.should be_able_to(:delete,  Factory.build(model.to_s.underscore.to_sym))
    end
  end
end
```

## Common Test Patterns

### Model patterns
Model tests are largely dependent on the specifics of the application. But a few common test patterns can be identified around the following areas.

###### Testing for validations

testing for validations
```ruby
it "should have valid name" do
  @group = Factory.new(:group, :name => '') # with no name
  @group.should_not be_an_instance_of(Group)
end
# Group.rb
# validates_presence_of :name
```

###### Testing for a model method

testing for a model method
```ruby
it "should have a users method" do
  @group = Factory.create(:group)
  @group.should respond_to(:users)
end
```

### Controller patterns
While model tests are specific to functionality of an application, controller tests follow similar patterns no matter what the application is supposed to do. Here are a few common test patterns that are employed in rspec controller testing.

###### Testing for a template

testing for a template
```ruby
it "should render the correct template" do
  get :new
  response.should render_template(:new)
end
```

###### Testing for the value of response variables

testing for a response variable
```ruby
it "should return an instance of a group" do
  get :new
  assigns(:group).should be_a_new(Group)
end
```

###### Testing for a successful post action

testing for a successful post action
```ruby
it "should post" do
  expect {
    post :create, {:group => Factory.attributes_for(:group)}
  }.to change(Group, :count).by(1)
end
```

###### Testing for a unsuccessful post action

testing for an unsuccessful post action
```ruby
it "should return back to new page when post fails" do
  expect {
    post :create, {:group => Factory.attributes_for(:group).merge({:name => ''})}
  }.to change(Group, :count).by(0)
  response.should render_template(:new)
end
```

###### Testing for a delete action

testing for a delete action
```ruby
it "should delete the group" do
  @group = Factory.create(:group)
  expect {
    delete :destroy, {:id => @group.id}
  }.to change(Group, :count).by(-1)
end
```
