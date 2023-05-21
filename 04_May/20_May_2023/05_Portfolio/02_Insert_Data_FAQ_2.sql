INSERT INTO FAQ (
        faq_category_code,
        faq_code,
        question,
        answer,
        popular_order,
        created_by,
        created_date,
        modified_by,
        modified_date,
        is_deleted
    )
VALUES(
        'PORTFOLIO',
        'PORTFOLIO_FAQ_2',
        'Apakah portfolio transaksi dicabang juga akan terakumulasi pada portfolio mobile banking?',
        'Iya, Portfolio yang muncul di mobile banking adalah keseluruhan portofolio nasabah baik yang dibeli via mobile banking maupun melalui cabang',
        35,
        'SYSTEM',
        TIMESTAMP '2023-05-15 05:01:32.870',
        NULL,
        NULL,
        FALSE
    );