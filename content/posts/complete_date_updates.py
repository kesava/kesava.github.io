#!/usr/bin/env python3
"""
Complete the blog post date updates
Run this script from the posts directory to update all remaining posts
"""

import re
from pathlib import Path
from datetime import datetime

posts_dir = Path(__file__).parent

# Complete mapping for ALL REMAINING posts (75 posts)
remaining_updates = {
    # April-June 2024 Books (continuing from 26 done)
    'from-the-ruins-of-the-empire.md': '2024-04-17',
    'midnight-in-siberia.md': '2024-05-02',
    'men-machines-and-modern-times.md': '2024-05-05',
    'anaximander.md': '2024-05-07',
    'the-ascent-of-money.md': '2024-05-10',
    'the-supreme-court.md': '2024-05-12',
    'madisons-gift.md': '2024-05-15',
    'troublesome-young-men.md': '2024-05-17',
    'gandhi-the-years-that-changed-the-world.md': '2024-06-02',
    'against-the-grain.md': '2024-06-05',
    'the-source.md': '2024-06-07',
    'atal-bihari-vajpayee-a-man-for-all-seasons.md': '2024-06-10',
    'reluctant-mr-darwin.md': '2024-06-12',
    'against-the-gods.md': '2024-06-15',
    'the-domestic-revolution.md': '2024-06-17',

    # July 2024 - Vemana wisdom verses (7 posts)
    'sting-today-wise-tomorrow.md': '2024-07-02',
    'shaved-heads-and-wandering-thoughts.md': '2024-07-05',
    'dharma-alone-endures.md': '2024-07-07',
    'fools-and-power.md': '2024-07-10',
    'like-a-bagel-mocking-a-donut.md': '2024-07-12',
    'covet-spares-none.md': '2024-07-15',
    'the-humble-and-the-arrogant.md': '2024-07-17',

    # August 2024 - Pothana devotional (9 posts)
    'manujadai-putti.md': '2024-08-02',
    'who-needs-the-seat-of-brahma.md': '2024-08-05',
    'vamana-asking-for-alms.md': '2024-08-07',
    'contentment-over-kingdoms.md': '2024-08-10',
    'not-an-ounce-of-strength.md': '2024-08-12',
    'doubting-divine-compassion.md': '2024-08-15',
    'krishnas-urgency-to-save-gajendra.md': '2024-08-17',
    'a-definition-of-myth.md': '2024-08-19',
    'this-wisdom-bears-your-mark.md': '2024-08-21',

    # September 2024 - Sanskrit classics (11 posts)
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

    # October 2024 - Short stories and devotional (9 posts)
    'nose-ring-in-the-vortex.md': '2024-10-02',
    'the-great-flood.md': '2024-10-05',
    'punukulu-social-tale.md': '2024-10-07',
    'krishna-the-handsome.md': '2024-10-10',
    'shiva-meditation.md': '2024-10-12',
    'the-bearer-of-the-world.md': '2024-10-15',
    'woes-without-cause.md': '2024-10-17',
    'the-day-krishna-charged.md': '2024-10-19',
    'inexplicable-beauty.md': '2024-10-21',

    # November 2024 - Classical Telugu (7 posts)
    'nannayas-final-verse.md': '2024-11-02',
    'lali-paata-lullaby.md': '2024-11-05',
    'true-poetry.md': '2024-11-07',
    'neeli-abstract-poetry.md': '2024-11-10',
    'the-world-of-telugu.md': '2024-11-12',
    'the-tranquilist.md': '2024-11-15',
    'logical-proof.md': '2024-11-17',

    # December 2024 - More books (9 posts)
    'there-will-be-fire.md': '2024-12-02',
    'cod.md': '2024-12-05',
    'victorian-internet.md': '2024-12-07',
    'three-languages-of-politics.md': '2024-12-10',
    'where-the-water-goes.md': '2024-12-12',
    'the-hardest-job-in-the-world.md': '2024-12-14',
    'kamal-haasan-by-k-hariharan.md': '2024-12-17',
    'knife-by-salman-rushdie.md': '2024-12-19',
    'rivers-of-powers.md': '2024-12-21',

    # January 2025 - Satirical/Humorous (8 posts)
    'the-art-of-public-speaking.md': '2025-01-02',
    'the-dignity-of-moustache.md': '2025-01-05',
    'cutting-expenses.md': '2025-01-07',
    'victoria-no-monarch-can-match.md': '2025-01-10',
    'mandalay-prison.md': '2025-01-12',
    'victorian-progress.md': '2025-01-15',
    'come-as-tiger.md': '2025-01-17',
    'the-best-in-class.md': '2025-01-19',

    # February 2025 - Remaining translations (1 post)
    'common-telugu-phrases.md': '2025-02-02',
}

def update_date(filepath, new_date):
    """Update the date field in a markdown file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the date field
    new_content = re.sub(
        r'^date:\s*"[^"]+"',
        f'date: "{new_date}"',
        content,
        count=1,
        flags=re.MULTILINE
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Execute updates
print("="*70)
print("BLOG POST DATE UPDATE SCRIPT")
print("="*70)
print(f"\nProcessing {len(remaining_updates)} posts...\n")

updated_count = 0
skipped_count = 0
error_count = 0
updates_log = []

for filename, new_date in sorted(remaining_updates.items(), key=lambda x: x[1]):
    filepath = posts_dir / filename

    if filepath.exists():
        try:
            # Read current date
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            current_date_match = re.search(r'^date:\s*"([^"]+)"', content, re.MULTILINE)
            current_date = current_date_match.group(1) if current_date_match else "unknown"

            # Only update if date is Dec 15-16 (to avoid re-updating already updated files)
            if current_date in ['2024-12-15', '2024-12-16']:
                update_date(filepath, new_date)
                updated_count += 1
                log_msg = f"✓ {filename:<55} {current_date} → {new_date}"
                print(log_msg)
                updates_log.append(log_msg)
            else:
                skipped_count += 1
                skip_msg = f"⊘ {filename:<55} Already updated ({current_date})"
                print(skip_msg)
                updates_log.append(skip_msg)

        except Exception as e:
            error_count += 1
            error_msg = f"✗ {filename:<55} ERROR: {str(e)}"
            print(error_msg)
            updates_log.append(error_msg)
    else:
        error_count += 1
        missing_msg = f"✗ {filename:<55} FILE NOT FOUND"
        print(missing_msg)
        updates_log.append(missing_msg)

# Write log file
log_content = f"""BLOG POST DATE UPDATE LOG
{'='*70}
Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

SUMMARY:
- Total processed: {len(remaining_updates)}
- Successfully updated: {updated_count}
- Skipped (already updated): {skipped_count}
- Errors: {error_count}

DETAILS:
{'='*70}

"""
log_content += "\n".join(updates_log)

log_file = posts_dir / '_DATE_UPDATE_LOG.txt'
with open(log_file, 'w', encoding='utf-8') as f:
    f.write(log_content)

# Print summary
print("\n" + "="*70)
print("SUMMARY")
print("="*70)
print(f"Successfully updated: {updated_count} posts")
print(f"Skipped (already updated): {skipped_count} posts")
print(f"Errors: {error_count} posts")
print(f"\nLog saved to: {log_file}")
print("="*70)

if updated_count > 0:
    print("\n✓ Date updates completed successfully!")
else:
    print("\n⚠ No files were updated. They may have been updated already.")
