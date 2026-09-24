$ErrorActionPreference = 'Stop'
$src = 'C:\Users\Albin\Desktop\Valorald\Client Projects\anaplak\People also ask queries.docx'
$zip = Join-Path $env:TEMP 'paa.zip'
$dir = Join-Path $env:TEMP 'paa_x'
$out = Join-Path $env:TEMP 'paa.txt'
Copy-Item -Force $src $zip
if (Test-Path $dir) { Remove-Item -Recurse -Force $dir }
Expand-Archive -Force -Path $zip -DestinationPath $dir
$xml = Get-Content -Raw (Join-Path $dir 'word\document.xml')
Add-Type -AssemblyName System.Web
$text = $xml -replace '<w:tab[^>]*/>', ' ' -replace '</w:p>', "`n" -replace '<[^>]+>', '' -replace '&amp;', '&' -replace '&lt;', '<' -replace '&gt;', '>'
[System.Web.HttpUtility]::HtmlDecode($text) | Out-File -Encoding utf8 $out
Write-Output "WROTE $out"