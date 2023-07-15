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
        ADDITIONAL_DATA,
        FLAG,
        IS_DELETED
    )
VALUES (
        'SYSTEM',
        TIMESTAMP '2023-07-15 10:48:00',
        'Prospectus MSSI (Base64 PDF)',
        NULL,
        NULL,
        'REKSADANA_PROSPECTUS',
        'MSSI',
        '-',
        'IDN',
        1,
        'Juni 2023',
        NULL,
        NULL,
        TO_CLOB('TESTING'),
        'BASE64',
        0
    );