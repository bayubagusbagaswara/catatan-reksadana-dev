INSERT INTO PARAMETER_MANAGEMENT_SERVICE.BUSINESS_PARAMETER (
        CREATED_BY,
        CREATED_DATE,
        DESCRIPTION,
        MODIFIED_BY,
        MODIFIED_DATE,
        MODULE,
        NAME,
        "ORDERING",
        LABEL1,
        LABEL2,
        IMAGE_URL,
        ADDITIONAL_DATA,
        ISDELETED,
        STATUS,
        VALUE
    )
VALUES (
        'SYSTEM',
        TIMESTAMP '2032-07-06 11:28:00',
        'List Denom Nominal Pembelian Reksadana Minimal 10 Ribu',
        NULL,
        NULL,
        'DENOM_SUBSCRIPTION_REKSADANA_MIN_100',
        '10 ribu',
        1,
        '10 ribu',
        '5 juta',
        NULL,
        NULL,
        0,
        'Aktif',
        TO_CLOB('5000000')
    );