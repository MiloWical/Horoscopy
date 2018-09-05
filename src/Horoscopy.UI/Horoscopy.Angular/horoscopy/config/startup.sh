echo "Service configuration file: "$CONFIG_FILE

if [ -n "$SERVICE_CONFIGURATION" ]
then
        rm -f $CONFIG_FILE
        echo $SERVICE_CONFIGURATION > $CONFIG_FILE
fi

echo ""
echo "Service configuration:"
cat ${CONFIG_FILE}

nginx -g "daemon off;"