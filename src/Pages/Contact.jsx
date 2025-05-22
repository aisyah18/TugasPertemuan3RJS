import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Hubungi Kami</h2>
      <div className="row justify-content-center">
        {/* Info Kontak */}
        <div className="col-lg-4 mb-4">
          <div className="bg-white p-4 rounded shadow">
            <h5 className="mb-3">Detail Kontak</h5>
            <p><strong>🏠 Alamat:</strong><br />Jl. Melati No. 45, Jakarta Selatan</p>
            <p><strong>📧 Email:</strong><br />contact@mywebsite.com</p>
            <p><strong>📞 Telepon:</strong><br />(021) 765-4321</p>
            <hr />
            <p><strong>🕒 Jam Operasi:</strong><br />Senin - Sabtu, 09.00 - 18.00 WIB</p>

            <hr />
            <h6 className="text-center">🔗 Ikuti Kami</h6>
            <div className="d-flex justify-content-center gap-4 mt-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="https://cdn-icons-png.flaticon.com/24/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <img src="https://cdn-icons-png.flaticon.com/24/1384/1384060.png" alt="YouTube" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src="https://cdn-icons-png.flaticon.com/24/3046/3046123.png" alt="TikTok" />
              </a>
            </div>
          </div>
        </div>

        {/* Form Kontak */}
        <div className="col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">Nama Lengkap</label>
              <input type="text" className="form-control" id="fullName" placeholder="Masukkan nama lengkap Anda" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">Alamat Email</label>
              <input type="email" className="form-control" id="emailAddress" placeholder="Masukkan alamat email Anda" />
            </div>
            <div className="mb-3">
              <label htmlFor="userMessage" className="form-label">Pesan Anda</label>
              <textarea className="form-control" id="userMessage" rows="5" placeholder="Tulis pesan Anda di sini..."></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">Kirim</button>
          </form>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="row mt-5">
        <div className="col-12">
          <h5 className="text-center mb-3">📍 Lokasi Kantor Kami</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.345272111345!2d106.82715341535731!3d-6.214621495500133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4c1d0bf6a1b%3A0xf3c9e3df08d52dbd!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1617639999999!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps - Jakarta Selatan"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
