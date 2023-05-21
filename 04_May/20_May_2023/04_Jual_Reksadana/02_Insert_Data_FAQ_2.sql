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
        'JUAL_REKSADANA',
        'JUAL_REKSADANA_FAQ_2',
        'Apakah terdapat pembatasan transaksi pengajuan penjualan reksa dana?',
        'Nasabah dapat melakukan pengajuan penjualan reksa dana melalui aplikasi kapan saja. Hanya saja apabila transaksi nasabah lebih dari jam cut off yaitu pukul 12.30 proses transaksi dan NAV akan mengikuti hari bursa berikutnya',
        31,
        'SYSTEM',
        TIMESTAMP '2023-05-15 04:54:28.090',
        NULL,
        NULL,
        FALSE
    );