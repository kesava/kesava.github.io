#!/usr/bin/env python3
"""
Blog Post Date Updater
Spreads clustered Dec 15-16, 2024 dates across 2024-2025
"""

import re
import os
from pathlib import Path

posts_dir = Path(__file__).parent

# Date mapping strategy
# Books: Jan-Jun 2024 (40), Dec 2024 (20), Mar-Apr 2025 (remainder)
# Translations: Jul-Nov 2024 (by category), Jan-Feb 2025 (remainder)

def update_date(filepath, new_date):
    """Update the date field in a markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(
        r'^date:\s*"[^"]+"',
        f'date: "{new_date}"',
        content,
        count=1,
        flags=re.MULTILINE
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Manual date assignments based on categorization
updates = {
    # Already updated manually
    'brunelleschis-dome.md': '2024-01-02',
    'i-deliver-parcels-in-beijing.md': '2024-01-19',
    'titan-the-life-of-john-d-rockefeller.md': '2024-01-21',
    'mathematica.md': '2024-01-23',
    'the-british-in-india.md': '2024-01-25',
    'the-river-of-doubt.md': '2024-01-27',

    # Continue with remaining books for Jan 2024
    'the-old-ways.md': '2024-02-02',
    'if-i-understood-you.md': '2024-02-05',
    'sixteen-stormy-days.md': '2024-02-07',
    'ninety-days-hunt-for-rajiv-gandhis-assassins.md': '2024-02-10',
    'the-pine-barrens.md': '2024-02-12',
    'the-golden-road.md': '2024-02-15',
    'cross-purposes-christianitys-broken-bargain.md': '2024-02-17',

    # March 2024 books
    'the-age-of-wood.md': '2024-03-02',
    'notre-dame-soul-of-france.md': '2024-03-05',
    'a-fever-in-the-heartland.md': '2024-03-07',
    'deng-xiaoping-and-the-transformation-of-china.md': '2024-03-10',
    'the-chile-project.md': '2024-03-12',
    'unthinkable.md': '2024-03-15',
    'culture-the-story-of-us.md': '2024-03-17',

    # April 2024 books
    'how-the-world-made-the-west.md': '2024-04-02',
    'india-moving-a-history-of-migration.md': '2024-04-05',
    'byomkesh-bakshi-stories.md': '2024-04-07',
    'a-brief-history-of-intelligence.md': '2024-04-10',
    'all-about-hindu-temples.md': '2024-04-12',
    'and-there-was-light.md': '2024-04-15',
    'from-the-ruins-of-the-empire.md': '2024-04-17',

    # May 2024 books
    'midnight-in-siberia.md': '2024-05-02',
    'men-machines-and-modern-times.md': '2024-05-05',
    'anaximander.md': '2024-05-07',
    'the-ascent-of-money.md': '2024-05-10',
    'the-supreme-court.md': '2024-05-12',
    'madisons-gift.md': '2024-05-15',
    'troublesome-young-men.md': '2024-05-17',

    # June 2024 books
    'gandhi-the-years-that-changed-the-world.md': '2024-06-02',
    'against-the-grain.md': '2024-06-05',
    'the-source.md': '2024-06-07',
    'atal-bihari-vajpayee-a-man-for-all-seasons.md': '2024-06-10',
    'reluctant-mr-darwin.md': '2024-06-12',
    'against-the-gods.md': '2024-06-15',
    'the-domestic-revolution.md': '2024-06-17',

    # July 2024 - Vemana wisdom verses
    'sting-today-wise-tomorrow.md': '2024-07-02',
    'shaved-heads-and-wandering-thoughts.md': '2024-07-05',
    'dharma-alone-endures.md': '2024-07-07',
    'fools-and-power.md': '2024-07-10',
    'like-a-bagel-mocking-a-donut.md': '2024-07-12',
    'covet-spares-none.md': '2024-07-15',
    'the-humble-and-the-arrogant.md': '2024-07-17',

    # August 2024 - Pothana devotional
    'manujadai-putti.md': '2024-08-02',
    'who-needs-the-seat-of-brahma.md': '2024-08-05',
    'vamana-asking-for-alms.md': '2024-08-07',
    'contentment-over-kingdoms.md': '2024-08-10',
    'not-an-ounce-of-strength.md': '2024-08-12',
    'doubting-divine-compassion.md': '2024-08-15',
    'krishnas-urgency-to-save-gajendra.md': '2024-08-17',
    'a-definition-of-myth.md': '2024-08-19',
    'this-wisdom-bears-your-mark.md': '2024-08-21',

    # September 2024 - Sanskrit classics
    'rama-the-great.md': '2024-09-02',
    'rama-the-handsome.md': '2024-09-05',
    'the-march-of-time.md': '2024-09-07',
    'overindulgence-ruins-all.md': '2024-09-10',
    'may-we-see-only-good.md': '2024-09-12',
    'wit-and-work.md': '2024-09-15',
    'men-who-uphold-the-world.md': '2024-09-17',
    'speech-crowns-your-character.md': '2024-09-19',
    'natural-instincts-cannot-be-taken-away.md': '2024-09-21',
    'the-measure-of-good-speech.md': '2024-09-23',
    'last-wishes.md': '2024-09-25',

    # October 2024 - Short stories and devotional
    'nose-ring-in-the-vortex.md': '2024-10-02',
    'the-great-flood.md': '2024-10-05',
    'punukulu-social-tale.md': '2024-10-07',
    'krishna-the-handsome.md': '2024-10-10',
    'shiva-meditation.md': '2024-10-12',
    'the-bearer-of-the-world.md': '2024-10-15',
    'woes-without-cause.md': '2024-10-17',
    'the-day-krishna-charged.md': '2024-10-19',
    'inexplicable-beauty.md': '2024-10-21',

    # November 2024 - Classical Telugu
    'nannayas-final-verse.md': '2024-11-02',
    'lali-paata-lullaby.md': '2024-11-05',
    'true-poetry.md': '2024-11-07',
    'neeli-abstract-poetry.md': '2024-11-10',
    'the-world-of-telugu.md': '2024-11-12',
    'the-tranquilist.md': '2024-11-15',
    'logical-proof.md': '2024-11-17',

    # December 2024 - More books
    'there-will-be-fire.md': '2024-12-02',
    'cod.md': '2024-12-05',
    'victorian-internet.md': '2024-12-07',
    'three-languages-of-politics.md': '2024-12-10',
    'where-the-water-goes.md': '2024-12-12',
    'the-hardest-job-in-the-world.md': '2024-12-15',
    'kamal-haasan-by-k-hariharan.md': '2024-12-17',
    'knife-by-salman-rushdie.md': '2024-12-19',
    'rivers-of-powers.md': '2024-12-21',

    # January 2025 - Satirical/Humorous
    'the-art-of-public-speaking.md': '2025-01-02',
    'the-dignity-of-moustache.md': '2025-01-05',
    'cutting-expenses.md': '2025-01-07',
    'victoria-no-monarch-can-match.md': '2025-01-10',
    'mandalay-prison.md': '2025-01-12',
    'victorian-progress.md': '2025-01-15',
    'come-as-tiger.md': '2025-01-17',
    'the-best-in-class.md': '2025-01-19',

    # February 2025 - Remaining translations
    'common-telugu-phrases.md': '2025-02-02',
}

# Execute updates
count = 0
errors = []

for filename, new_date in updates.items():
    filepath = posts_dir / filename
    if filepath.exists():
        try:
            update_date(filepath, new_date)
            count += 1
            print(f"✓ {filename} -> {new_date}")
        except Exception as e:
            errors.append(f"{filename}: {str(e)}")
            print(f"✗ {filename}: {str(e)}")
    else:
        print(f"⚠ {filename} not found")

print(f"\n{'='*60}")
print(f"Updated {count} posts")
if errors:
    print(f"Errors: {len(errors)}")
    for error in errors:
        print(f"  - {error}")

# Write completion marker
with open(posts_dir / '_DATE_UPDATE_COMPLETE.txt', 'w') as f:
    f.write(f"Date update completed\nUpdated {count} posts\n")
    f.write(f"Timestamp: {__import__('datetime').datetime.now()}\n")

print("\nDone!")
