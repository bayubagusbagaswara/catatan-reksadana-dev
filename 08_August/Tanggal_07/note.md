# Question

- Apakah reksadana berbeda SID dengan SBSN?
- Kondisi saat ini, jika nasabah sudah membuat akun SBSN maka sudah mendapatkan SID
- Jika SID reksa dana berbeda, maka ketika registrati harus buat SID baru. Tapi sebelumnya cek dulu, apakah user ini sudan memiliki SID apa belum?
- Di receipt ada keterangan Tabungan Sumber, ini didapat darimana? karena di proses registrasi tidak memilih tabungan sumber

# Sprint Planning

- Dari sisi backend, cek tiap product apakah Nasabah sudah memiliki (terdaftar) akun product investasi belum
- Nanti di response API `getproducts` tambahkan field flagging untuk menandakan tiap product sudah punya akun atau belum
- Product Emas, flagging `isEmasAccountExist`
- Product Deposito, flagging `isDepositoAccountExist`
- Product SBSN, flagging `isSBSNAccountExist`
- atau semua flagging dijadikan satu menjadi `isAccountExist`. Ditambahkan di productDto

# SBSN

- method `inquiryStatus` di service SBSNService apakah bisa dibuat untuk pengecekan account existing?
- karena di SBSN ada activationSID untuk berhasil membuat akun
- jika `sid` dan `sre` bernilai NULL, maka Nasabah belum punya akun SBSN

1. Cek SID dan SRE jika null, maka popup `Verifikasi masih dalam proses`
2. Cek jika SID dan SRE sudah ada, maka popup `Lakukan Aktivasi Akun SBSN`

# Emas

- method `getDetailRekeningEmas` di service EmasDashboardService, cek jika `rekeningEmas` bernilai NULL, maka belum punya akun Emas
- response getDetailRekeningEmas bisa throw Error, maka kita cek melalui method jika terjadi error, maka set Response nya adalah FALSE (belum punya akun)

# ENUM

- `DONE`, `IN_PROGRESS`, `NEW`
- `DONE` jika nasabah sudah punya akun
- `IN_PROGRESS` jika akun nasabah dalam proses pembuatan
- `NEW` jika nasabah belum punya akun

# Investment Controller

            InquiryStatusRs inquiryStatusSBSN = sbsnService.inquiryStatus(metadata);
            EmasGetDetailRekeningRs detailRekeningEmas = emasDashboardService.getDetailRekeningEmas(metadata);

            depositoService.enquiryDepoSvc.enquiryDepositoV2(new EnquiryDepositoRq());

# Method checkAccountEmasExist

# Method checkAccountSBSNExist

# Method checkAccountDepositoExist
