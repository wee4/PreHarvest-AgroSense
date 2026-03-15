import re

fpath_f = 'frontend/app/dashboard/farmer/page.tsx'
with open(fpath_f, 'r', encoding='utf-8') as f:
    ff = f.read()

for w in ['XCircle', 'Share2', 'Target', 'Info', 'CircleDashed', 'Clock', 'LeafyGreen', 'Map', 'Play']:
    ff = ff.replace(w + ',', '')

ff = ff.replace('const isFullNetwork = activeNetwork === "full";', '')
ff = ff.replace("const isFullNetwork = activeNetwork === 'full';", '')

with open(fpath_f, 'w', encoding='utf-8') as f:
    f.write(ff)
    
fpath_ao = 'frontend/app/dashboard/ao/page.tsx'
with open(fpath_ao, 'r', encoding='utf-8') as f:
    fao = f.read()
fao = fao.replace('const [farmers, setFarmers]', 'const [farmers]')
with open(fpath_ao, 'w', encoding='utf-8') as f:
    f.write(fao)

fpath_p = 'frontend/app/dashboard/predictor/page.tsx'
with open(fpath_p, 'r', encoding='utf-8') as f:
    fp = f.read()
fp = fp.replace('Wind,', '')
fp = fp.replace('catch (err: Error | unknown)', 'catch (_: Error | unknown)')
with open(fpath_p, 'w', encoding='utf-8') as f:
    f.write(fp)
    
fpath_t = 'frontend/app/dashboard/transport/page.tsx'
with open(fpath_t, 'r', encoding='utf-8') as f:
    ft = f.read()
ft = ft.replace('CheckCircle,', '')
with open(fpath_t, 'w', encoding='utf-8') as f:
    f.write(ft)
