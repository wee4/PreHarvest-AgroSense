import os
import glob

directory = 'frontend/app/dashboard'

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('page.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # The literal characters \` and \$ were written to file during the prompt generation
            if r'\`' in content or r'\$' in content:
                new_content = content.replace(r'\`', '`').replace(r'\$', '$')
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Fixed {file_path}")
