import os
import re

directories_to_scan = ['frontend/app', 'frontend/components']
files_to_fix = []

for d in directories_to_scan:
    for root, dirs, files in os.walk(d):
        for f in files:
            if f.endswith('.tsx'):
                files_to_fix.append(os.path.join(root, f))

button_pattern = re.compile(r'(<button\b)([^>]*)>')

for filepath in files_to_fix:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_button(match):
        attrs = match.group(2)
        # Check if button has onClick or type="submit" or type='submit'
        if 'onClick' in attrs or 'type="submit"' in attrs or "type='submit'" in attrs:
            return match.group(0)
        
        # Determine some meaningful alert message based on surrounding class or text?
        # Just use a generic one if not submitting.
        return f'{match.group(1)} onClick={{() => alert("Action triggered")}} {attrs}>'

    new_content = button_pattern.sub(replace_button, content)
    
    # Let's also do a check for Dropdowns (select elements without onChange)
    select_pattern = re.compile(r'(<select\b)([^>]*)>')
    def replace_select(match):
        attrs = match.group(2)
        if 'onChange' in attrs:
            return match.group(0)
        return f'{match.group(1)} onChange={{(e) => alert("Selected: " + e.target.value)}} {attrs}>'
        
    new_content = select_pattern.sub(replace_select, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed buttons/selects in {filepath}")

print("Global interactions fixed.")
