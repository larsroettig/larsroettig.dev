# Personal blog larsroettig.dev
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=larsroettig_larsroettig.dev&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=larsroettig_larsroettig.dev)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=larsroettig_larsroettig.dev&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=larsroettig_larsroettig.dev)
[![DeepScan grade](https://deepscan.io/api/teams/9672/projects/12261/branches/200062/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=9672&pid=12261&bid=200062)


<a href="https://larsroettig.dev/" target="_blank">
<img src="https://github.com/larsroettig/larsroettig.dev/blob/master/static/preview_full.png" alt="larsroettig.dev hero image" />
</a>
<br/>

Content Structure 
```
  content
    │ ├── authors
    │ │   ├── avatars
    │ │   │    └── avatar.jpg
    │ │   └── author.json
    │ └── posts
    │     └── 2020-01-01-my-first-novela-post
    │         └── hero.jpg
    │         └── index.mdx
```

## Develop & Build
```sh
# Run localhost
npx nx serve larsroettig.dev  

# Build gatsby site
npx nx build larsroettig.dev  
```
