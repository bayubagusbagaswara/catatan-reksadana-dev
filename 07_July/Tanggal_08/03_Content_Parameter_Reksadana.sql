INSERT INTO PARAMETER_MANAGEMENT_SERVICE.CONTENT_PARAMETER (
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
        'SYSTEM',
        TIMESTAMP '2023-07-24 09:48:43.018',
        'Template Receipt IDN Opening Reksa Dana',
        NULL,
        NULL,
        'TEMPLATE_RECEIPT',
        'INVEST_OPENING_REKSADANA',
        '-',
        'IDN',
        1,
        NULL,
        NULL,
        NULL,
        TO_CLOB(
            '{
  "transactionStatusData": [
    {
      "value": "<font color=\"#F4000000\" size=\"16\" weight=\"bold\">${namaNasabah}</font>",
      "key": "Nama Nasabah",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "",
      "key": "",
      "type": "line"
    },
     {
      "value": "<font color=\"#F4000000\" size=\"16\" weight=\"bold\">${email}</font>",
      "key": "Alamat Email",
      "type": "data",
      "background": "#00FFFFFF"
    },
   
    {
      "value": "",
      "key": "",
      "type": "line"
    },
    {
      "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${riskProfile}</font>",
      "key": "Profil Risiko",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "detailTransaksi": [
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${namaNasabah}</font>",
          "key": "Nama Nasabah",
          "type": "data",
          "background": "#00FFFFFF"
        },
        {
          "value": "",
          "key": "",
          "type": "line"
        },
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${email}</font>",
          "key": "Alamat Email",
          "type": "data",
          "background": "#00FFFFFF"
        },
        {
          "value": "",
          "key": "",
          "type": "line"
        },
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${nik}</font>",
          "key": "NIK",
          "type": "data",
          "background": "#00FFFFFF"
        },
        {
          "value": "",
          "key": "",
          "type": "line"
        }'
        ) || TO_CLOB(
            ',
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${riskProfile}</font>",
          "key": "Profil Risiko",
          "type": "data",
          "background": "#00FFFFFF"
        },
        {
          "value": "",
          "key": "",
          "type": "line"
        },
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${tanggal}</font>",
          "key": "Tanggal",
          "type": "data",
          "background": "#00FFFFFF"
        },
        {
          "value": "",
          "key": "",
          "type": "line"
        },
        {
          "value": "<font color=\"#F4000000\" size=\"14\" weight=\"normal\">${jam}</font>",
          "key": "Jam",
          "type": "data",
          "background": "#00FFFFFF"
        }
      ]
    }
  ],
  "receiptData": [
    {
      "value": "<font color=\"#F4000000\" size=\"21\" weight=\"bold\">${namaNasabah}</font>",
      "key": "Nama Nasabah",
      "type": "data",
      "background": "#FFFDEB"
    },
    {
      "value": "",
      "key": "",
      "type": "line"
    },
    {
      "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${tanggal}</font>",
      "key": "Tanggal",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${jam}</font>",
      "key": "Jam",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${email}</font>",
      "key": "Alamat Email",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${nik}</font>",
      "key": "NIK",
'
        ) || TO_CLOB(
            '      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "",
      "key": "",
      "type": "line"
    },
    {
      "value": "<font color=\"#9E000000\" size=\"14\" weight=\"normal\">${riskProfile}</font>",
      "key": "Profil Risiko",
      "type": "data",
      "background": "#00FFFFFF"
    },
    {
      "value": "",
      "key": "",
      "type": "line"
    },
  ]
}
'
        )
    );