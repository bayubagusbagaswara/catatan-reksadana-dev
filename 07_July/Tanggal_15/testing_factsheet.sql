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
        TIMESTAMP '2023-07-12 09:02:00',
        'Fund Fact Sheet MPUS (Base64 PDF)',
        NULL,
        NULL,
        'REKSADANA_FACTSHEET',
        'MPUS',
        '-',
        'IDN',
        1,
        NULL,
        NULL,
        NULL,
        TO_CLOB('TESTING'),
        'BASE64',
        0
    );