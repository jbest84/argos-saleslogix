@echo off

call grunt clean:js babel

PUSHD ..\..\argos-sdk\tools\argos-localizer\
argos-localizer.exe export --base-path ..\..\.. --config-path ..\..\..\products\argos-saleslogix\build\localization.json
POPD
