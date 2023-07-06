INSERT INTO NOTIFICATION_MANAGEMENT_SERVICE.NOTIFICATION_TEMPLATE (
        ID,
        CREATED_BY,
        CREATED_DATE,
        "LANGUAGE",
        MESSAGE_SENDER,
        MESSAGE_SUBJECT,
        MODIFIED_BY,
        MODIFIED_DATE,
        TEMPLATE_CODE,
        TEMPLATE_TYPE,
        MESSAGE_CONTENT,
        ICON,
        MESSAGE_TITLE,
        ACTION_INFO,
        ACTION_LINK,
        ADDITIONAL_INFO
    )
VALUES (
        601,
        'SYSTEM',
        TIMESTAMP '2021-08-04 20:37:00',
        'IDN',
        'Bank Syariah Indonesia<development.bsi@ist.id>',
        'Pembukaan Deposito Berhasil',
        NULL,
        NULL,
        'OPENING_DEPOSITO',
        'EMAIL',
        TO_CLOB(
            '<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>deposito</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    @import url(''https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'');
  </style>
  <style>
    :root {
      color-scheme: light;
      supported-color-schemes: light;
    }

    html,
    body {
      margin: 0 auto !important;
      padding: 0 !important;
      height: 100% !important;
      width: 100% !important;
      font-family: DM Sans, sans-serif;
      color: rgba(49, 53, 59, 0.96);
    }

    * {
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }

    div[style*="margin: 16px 0"] {
      margin: 0 !important;
    }

    #MessageViewBody,
    #MessageWebViewDiv {
      width: 100% !important;
    }

    table,
    td {
      mso-table-lspace: 0pt !important;
      mso-table-rspace: 0pt !important;
    }

    table {
      border-spacing: 0 !important;
      border-collapse: collapse !important;
      table-layout: fixed !important;
      margin: 0 auto !important;
    }

    img {
      -ms-interpolation-mode: bicubic;
    }

    a {
      text-decoration: none;
      color: #ffffff;
    }

    a[x-apple-data-detectors],
    .unstyle-auto-detected-links a,
    .aBn {
      border-bottom: 0 !important;
      cursor: default !important;
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .im {
      color: inherit !important;
    }

  '
        ) || TO_CLOB(
            '  .a6S {
      display: none !important;
      opacity: 0.01 !important;
    }

    @media only screen and (min-device-width: 414px) {
      u~div .email-container {
        min-width: 414px !important;
      }
    }
  </style>
  <style>
    @media screen and (max-width: 480px) {

      .stack-column,
      .stack-column-center {
        display: block !important;
        width: 100% !important;
        max-width: 100% !important;
        direction: ltr !important;
      }

      .stack-column-half {
        display: inline-block !important;
        width: 50% !important;
        max-width: 50% !important;
        direction: ltr !important;
      }

      .stack-column-center {
        text-align: center !important;
      }

      .center-on-narrow {
        text-align: center !important;
        display: block !important;
        margin-left: auto !important;
        margin-right: auto !important;
        float: none !important;
      }

      img.full-on-narrow {
        width: 100% !important;
        max-width: 100% !important;
      }

      table.center-on-narrow {
        display: inline-block !important;
      }
    }
  </style>
  <style>
    .fa {
      padding: 20px;
      font-size: 20px;
      width: 20px;
      text-align: center;
      text-decoration: none;
      margin: 5px 2px;
      border-radius: 50%;
    }

    .fa:hover {
      opacity: 0.9;
    }

    .fa-facebook {
      background: rgba(255, 255, 255, 0.2);
    }

    .fa-twitter {
      background: rgba(255, 255, 255, 0.2);
    }

    .fa-youtube {
      background: rgba(255, 255, 255, 0.2);
    }

    .fa-instagram {
      background: rgba(255, 255, 255, 0.2);
    }

    .fa-android {
      background: rgba(255, 255, 255, 0.2);
    }


    table.tableBody2 {
      border-collapse: collapse;
      width: 100%
    }

    table.tableBody2 td {
      border-bottom: 1px solid #E0E0E0;
    }

    .span'
        ) || TO_CLOB(
            '1TableBody2 {
      color: rgba(0, 0, 0, 0.62);
      font-family: DM Sans, sans-serif;
      font-size: 14px;
      line-height: 20px;
    }

    .span2TableBody2 {
      float: right;
      width: 50%;
      color: rgba(0, 0, 0, 0.62);
      font-family: DM Sans,
        sans-serif;
      font-size: 14px;
      line-height: 20px;
      text-align: justify;
    }

    .td1TableBody2 {
      padding: 8px 8px 8px 8px;
      background-color: #FAFAFA;
    }
  </style>
</head>

<body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F8F8F8;">
  <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #F8F8F8;">
    <div style="max-width: 600px; margin: 0 auto;" class="email-container">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
        <tr>
          <td align="left" style="padding: 24px; background-color: #FFFFFF; text-align: left;">
            <img src="http://mf8.myinfosys.net:7005/bsi/assets/email/logo@2x.png"
              width="111px" height="32px" alt="Bsi logo">
          </td>
        </tr>
        <tr>
          <td style="padding: 0px 32px; background-color: #FFFFFF">
            <h2
              style="color: rgba(0, 0, 0, 0.96); font-family: DM Sans, sans-serif; font-weight: bold; font-size: 21px; line-height: 26px;">
              Pembukaan Deposito Berhasil
            </h2>
          </td>
        </tr>
        <tr>
          <td style="padding: 0px 32px; background-color: #FFFFFF">
            <p style="color: rgba(0, 0, 0, 0.96); font-family: DM Sans, sans-serif;
                    font-size: 14px; line-height: 20px;">
              Assalamu’alaikum ${nasabah},
            </p>
            <p style="color: rgba(0, 0, 0, 0.62); font-family: DM Sans, sans-serif;
					font-size: 12px; line-height: 16px;">
              Resi dari email in'
        ) || TO_CLOB(
            'i adalah bukti sah pembukaan deposito :
            </p>
          </td>
        </tr>
        <tr style= "word-wrap: break-word"  >
          <td style="padding: 0px 5px; background-color: #FFFFFF">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                <tr>
                  <td
                    style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                    Nominal Deposito
                  </td>
                  <td
                    style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                    ${totalTransaction}
                  </td>
                </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Tanggal
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${depositoDate}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Jam
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${depositoTime}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
          '
        ) || TO_CLOB(
            '        Tujuan Deposito
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${depositoPurpose}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Nomor Deposito
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${noDeposito}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Rekening Deposito
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${rekeningDeposito}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Kantor Cabang
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${branchName}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Jangka Waktu
            '
        ) || TO_CLOB(
            '    </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${timePriode}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Jatuh Tempo
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${maturityDate}
                </td>
              </tr>

              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Jenis Deposito
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${depositoType}
                </td>
              </tr>


              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Nisbah bagi hasil nasabah
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${nisbahBagiHasilNasabah}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Nisbah bagi hasil bank
                </td>
'
        ) || TO_CLOB(
            '
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${nisbahBagiHasilBank}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Nominal Deposito
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${depositoAmount}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Biaya Materai
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${biayaAdmin}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Total
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${totalTransaction}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Nomor Struk
                </td>
                <td

                '
        ) || TO_CLOB(
            '  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${noStruk}
                </td>
              </tr>
              <tr>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0; width: 10px;font-size:14px">
                  Terminal
                </td>
                <td
                  style="padding: 25px 24px 24px 24px; background-color: #FAFAFA; border-bottom: 1px solid #E0E0E0;font-size:14px; width: 10px">
                  ${terminal}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>

          <td style="padding: 30px 0px 0 12px ; background-color: #FFFFFF">
            <p style="color: rgba(0, 0, 0, 0.38); font-family: DM Sans,sans-serif;
					font-size:12px; line-height: 16px;">
              Rekening Sumber
            </p>
            <p style="color: rgba(0, 0, 0, 0.96); font-weight: bold; font-family: DM Sans, sans-serif;
					font-size:14px; line-height: 20px;">
              ${fromAccountOwnerName}
            </p>
            <p style="padding: 0 0 0 0 ; color: rgba(0, 0, 0, 0.62); font-family: DM Sans, sans-serif;
					font-size:12px; line-height: 16px;">
              ${accountNumber}
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding: 30px 0px 0 12px ; background-color: #FFFFFF">
            <p style="color: rgba(0, 0, 0, 0.38); font-family: DM Sans, sans-serif; font-size:12px; line-height: 16px;">
              Terima kasih telah menggunakan layanan BSI Mobile Banking dari Bank Syariah Indonesia.<br>
              Semoga layanan kami mendatangkan manfaat bagi anda.
            <p>
          </td>
        </tr>
      </table>
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: aut'
        ) || TO_CLOB(
            'o;">
        <tr>
          <td style="padding: 24px 20px 0; background: #50B3AE;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
              <tr>
                <td style="padding: 0px 0px">
                  <p
                    style="color: rgba(255, 255, 255, 1); font-family: DM Sans, sans-serif; font-size:14px; line-height: 20px; text-align:center">
                    Butuh bantuan? Hubungi kami di 14040</p>
                  <p style="text-align: center">
                    <a href="https://web.facebook.com/bankBSI.ID/">
                      <img
                        src="https://storage.googleapis.com/bsisuperapp2.bankbsi.co.id/assets/email/icon-facebook.png"
                        style="width:30px ;">
                    </a>

                    <a href="https://www.instagram.com/banksyariahindonesia">
                      <img
                        src="https://storage.googleapis.com/bsisuperapp2.bankbsi.co.id/assets/email/icon-instagram.png"
                        style="width:30px ; margin-left: 10px;">
                    </a>

                    <a href="https://www.youtube.com/c/BankSyariahIndonesia">
                      <img src="https://storage.googleapis.com/bsisuperapp2.bankbsi.co.id/assets/email/icon-youtube.png"
                        style="width:30px ;margin-left: 10px;">
                    </a>

                    <a href="https://twitter.com/bankbsi_id">
                      <img src="https://storage.googleapis.com/bsisuperapp2.bankbsi.co.id/assets/email/icon-twitter.png"
                        style="width:30px ;margin-left: 10px;">
                    </a>
                  </p>
                  <hr style="border :1px solid rgba(255, 255, 255, 0.2);">
                </td>
              </tr>
              <tr>
                <td style="padding: 20px">
                  <img src="https://storage.googleapis.com/bsisuperapp2.ban'
        ) || TO_CLOB(
            'kbsi.co.id/assets/bsi-logo-dark-1.png"
                    alt="bsi logo" class="g-img" width="133px" height="40px"
                    style="margin-left: auto; margin-right: auto; width: 50% background #50B3AE; display: block;" />

              </tr>
              <tr>
                <td
                  style="padding: 4px 0 24px; font-family: sans-serif; font-size: 12px; line-height: 18px; color: #ffffff; text-align: center;">
                  <p style="margin: 0;">PT Bank Syariah Indonesia terdaftar dan diawasi oleh Otoritas Jasa Keuangan
                    (OJK) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS)</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
  </center>
  <p>&nbsp;<br></p>
</body>

</html>'
        ),
        NULL,
        NULL,
        NULL,
        NULL,
        NULL
    );