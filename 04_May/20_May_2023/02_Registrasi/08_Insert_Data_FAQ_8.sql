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
        'REGISTRASI',
        'REGISTRASI_FAQ_8',
        'Apakah data cabang yang dipilih ketika registrasi bersifat wajib diisi?',
        'Iya, diisi menyesuaikan cabang terdekat dari lokasi nasabah. Cabang disini tidak akan berpengaruh pada transaksi reksa dana nasabah',
        24,
        'SYSTEM',
        TIMESTAMP '2023-05-15 04:37:40.257',
        NULL,
        NULL,
        FALSE
    );