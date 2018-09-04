####### BEGIN COMPILETIME CONTAINER DEFINITION #######

FROM microsoft/dotnet:2.1.401-sdk-alpine AS Compiletime

RUN mkdir -p /_src/app 
WORKDIR /_src/app

COPY . .

RUN dotnet restore ./Horoscopy.API/Horoscopy.API.csproj
RUN dotnet publish -c release -o ../bin

####### END COMPILETIME CONTAINER DEFINITION #######

####### BEGIN RUNTIME CONTAINER DEFINITION #######

#Make sure to use the <VERSION>-aspnetcore-runtime-<DISTRO> image,
#as it has different runtime assemblies than the <VERSION>-runtime-<DISTRO>
#image.
FROM microsoft/dotnet:2.1.3-aspnetcore-runtime-alpine AS Runtime

RUN mkdir -p /_bin/
WORKDIR /_bin/

COPY --from=Compiletime /_src/app/bin .

EXPOSE 80/tcp

ENTRYPOINT [ "dotnet", "Horoscopy.API.dll" ]

####### END RUNTIME CONTAINER DEFINITION #######