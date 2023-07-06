INSERT INTO PARAMETER_MANAGEMENT_SERVICE.CONTENT_PARAMETER (
        ID,
        CREATED_BY,
        CREATED_DATE,
        DESCRIPTION,
        MODIFIED_BY,
        MODIFIED_DATE,
        MODULE,
        NAME,
        VALUE,
        "LANGUAGE",
        "ORDERING",
        LABEL1,
        LABEL2,
        IMAGE_URL,
        ADDITIONAL_DATA
    )
VALUES (
        1340,
        'SYSTEM',
        TIMESTAMP '2022-04-13 10:29:29',
        'Template Receipt IDN Transfer Online',
        NULL,
        NULL,
        'TEMPLATE_RECEIPT',
        'TRANSFER_ONLINE',
        '-',
        'IDN',
        1,
        NULL,
        NULL,
        NULL,
        TO_CLOB(
            '{
    "transactionStatusData": [{
            "value": "<font color=\"#F4000000\" size=\"16\" weight=\"bold\">${transactionAmount}</font>",
            "key": "Nominal Transfer",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "",
            "key": "",
            "type": "line"
        }, {
            "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${toAccountOwnerName}</font><br><font color=\"#9E000000\" size=\"14\" weight=\"normal\">${toBankName} • ${toAccountNumber}</font>",
            "key": "Nama Penerima",
            "type": "data",
            "background": "#00FFFFFF"
        }
        <#if message?has_content>
        , {
            "value": "",
            "key": "",
            "type": "line"
        }, {
            "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${message}</font>",
            "key": "Catatan",
            "type": "data",
            "background": "#00FFFFFF"
        }
        </#if>
        , {
            "detailTransaksi": [{
                    "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${transactionAmount}</font>",
                    "key": "Nominal Transaksi",
                    "type": "data",
                    "background": "#00FFFFFF"
                }, {
                    "value": "",
                    "key": "",
                    "type": "line"
                }, {
                    "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${transactionFee}</font>",
                    "key": "Biaya Admin",
                    "type": "data",
                    "background": "#00FFFFFF"
                }, {
                    "value": "",
                    "key": "",
                    "type": "line"
                }, {
                    "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${totalAmount}</font>",
         '
        ) || TO_CLOB(
            '           "key": "Total",
                    "type": "data",
                    "background": "#00FFFFFF"
                }
            ]
        }
    ],"receiptData": [{
            "value": "<font color=\"#F4000000\" size=\"22\" weight=\"bold\">${transactionAmount}</font>",
            "key": "Nominal Transfer",
            "type": "data",
            "background": "#80FFF5E6"
        }, {
            "value": "<font color=\"#F4000000\" size=\"16\" weight=\"bold\">${toAccountOwnerName}</font><br><font color=\"#9E000000\" size=\"14\" weight=\"normal\">${toBankName} • ${toAccountNumber}</font>",
            "key": "Nama Penerima",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#F4000000\" size=\"16\" weight=\"bold\">${fromAccountOwnerName}</font><br><font color=\"#9E000000\" size=\"14\" weight=\"normal\">${fromBankName} • ${fromAccountNumber}</font>",
            "key": "Rekening Sumber",
            "type": "data",
            "background": "#00FFFFFF"
        }
        <#if message?has_content>
        , {
            "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${message}</font>",
            "key": "Catatan",
            "type": "data",
            "background": "#00FFFFFF"
        }
        </#if>
        , {
            "value": "",
            "key": "",
            "type": "line"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">Online</font>",
            "key": "Metode Transfer",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${transactionAmount}</font>",
            "key": "Nominal Transaksi",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${transactionFee}</font>'
        ) || TO_CLOB(
            '",
            "key": "Biaya Admin",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"bold\">${totalAmount}</font>",
            "key": "<font color=\"#9E000000\" size=\"14\" weight=\"bold\">Total</font>",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "",
            "key": "",
            "type": "line"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${transactionId}</font>",
            "key": "Nomor Struk",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${coreRefNo}</font>",
            "key": "Nomor Transaksi",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${terminal}</font>",
            "key": "Terminal",
            "type": "data",
            "background": "#00FFFFFF"
        }, {
            "value": "",
            "key": "",
            "type": "line"
        }
    ]
}'
        )
    );