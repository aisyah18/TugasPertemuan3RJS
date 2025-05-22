import React from "react";

const teamMembers = [
  {
    name: "Rina Kurnia",
    position: "Product Designer",
    description: "Bertanggung jawab atas desain UI/UX agar tampilan website menarik dan mudah digunakan.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Andi Prasetyo",
    position: "Fullstack Developer",
    description: "Mengembangkan fitur front-end dan back-end agar website berjalan lancar dan responsif.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    name: "Maya Putri",
    position: "Digital Marketing Specialist",
    description: "Merancang strategi pemasaran digital untuk meningkatkan awareness dan penjualan.",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  },
  {
    name: "Fajar Santoso",
    position: "QA Engineer",
    description: "Memastikan kualitas aplikasi dengan melakukan pengujian dan pelaporan bug.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Dewi Anggraini",
    position: "Customer Success Manager",
    description: "Mendampingi pelanggan agar mendapatkan pengalaman terbaik menggunakan layanan kami.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  }
];

const Team = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Tim Kami</h2>
      <div className="row justify-content-center">
        {teamMembers.map((member, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center shadow-sm">
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ objectFit: "cover", height: "200px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <h6 className="text-muted">{member.position}</h6>
                <p className="card-text">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
