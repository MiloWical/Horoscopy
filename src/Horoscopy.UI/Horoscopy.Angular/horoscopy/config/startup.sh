echo "Service configuration file: "$CONFIG_FILE

if [ -n "$SERVICE_CONFIGURATION" ]
then
        rm -f $CONFIG_FILE
        echo $SERVICE_CONFIGURATION > $CONFIG_FILE
fi

echo ""
echo "Service configuration:"
cat ${CONFIG_FILE}

cp /usr/share/nginx/html/index.html /usr/share/nginx/html/index.original.html 
cat /usr/share/nginx/html/index.html | sed 's!{{URL_BASE_PREFIX}}!'$URL_BASE_PREFIX'!' > /usr/share/nginx/html/index.html

echo ""
echo "URL Base Prefix: "$URL_BASE_PREFIX

nginx -g "daemon off;"
