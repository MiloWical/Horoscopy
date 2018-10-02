echo "Service configuration file: "$TARGET_CONFIG_FILE

if [ -f "$TARGET_CONFIG_FILE" ]
then
        rm -f $TARGET_CONFIG_FILE
else
        mkdir -p $(dirname $TARGET_CONFIG_FILE) 
fi

touch $TARGET_CONFIG_FILE

if [ -n "$SERVICE_CONFIGURATION" ]
then
        echo $SERVICE_CONFIGURATION > $TARGET_CONFIG_FILE
else
        cat $SOURCE_CONFIG_FILE > $TARGET_CONFIG_FILE
fi

echo ""
echo "Service configuration:"
cat ${TARGET_CONFIG_FILE}

cp /usr/share/nginx/html/index.html /usr/share/nginx/html/index.original.html 
cat /usr/share/nginx/html/index.original.html | sed 's!{{URL_BASE_PREFIX}}!'$URL_BASE_PREFIX'!' > /usr/share/nginx/html/index.html

echo ""
echo "URL Base Prefix: "$URL_BASE_PREFIX

nginx -g "daemon off;"
