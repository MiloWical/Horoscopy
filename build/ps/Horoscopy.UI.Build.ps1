$CurrentDirectory = Get-Location

Set-Location ..\..\src\Horoscopy.UI\Horoscopy.Angular\horoscopy

docker build . -t horoscopy_ui -f ..\..\..\..\build\docker\Horoscopy.UI.Dockerfile

Set-Location $CurrentDirectory