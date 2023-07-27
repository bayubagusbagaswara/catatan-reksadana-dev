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
        TIMESTAMP '2023-07-27 14:52:00',
        'Reksa Dana Risk Profle Conservative',
        NULL,
        NULL,
        'REKSADANA_RISK_PROFILE',
        'CONSERVATIVE',
        '-',
        'IDN',
        1,
        NULL,
        NULL,
        NULL,
        TO_CLOB('Tipe conservative adalah tipe investor dengan profil risiko paling rendah. Ciri-cirinya, investor tipe ini menginginkan investasi yang aman, tingkat imbal hasil (return) cenderung stabil, dan takut kalau investasi pokok berkurang'),
        'UNKNOWN',
        0
    );