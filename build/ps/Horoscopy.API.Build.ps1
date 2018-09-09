$CurrentDirectory = Get-Location

Set-Location ..\..\src\Horoscopy.API
docker build . -t horoscopy-api -f ../../build/docker/Horoscopy.API.Dockerfile

Set-Location $CurrentDirectory