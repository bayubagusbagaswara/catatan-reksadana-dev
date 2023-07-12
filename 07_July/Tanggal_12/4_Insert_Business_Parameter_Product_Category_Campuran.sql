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
        TIMESTAMP '2023-07-12 10:46:00',
        'Product Catalog Category Campuran',
        NULL,
        NULL,
        'REKSADANA_CATEGORY',
        'Campuran',
        3,
        NULL,
        NULL,
        'http://mf8.myinfosys.net:7005/bsi/assets/ReksaDana/ProductCatalogCategory/Campuran/campuran_2x.png',
        NULL,
        0,
        'Aktif',
        TO_CLOB('CAMPURAN')
    );