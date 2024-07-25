import React from 'react'
import aboutus from '../../public/aboutimage.png'

function About() {
  return (
    <>
    <div className="bg-white">

    <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-lg  p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-3xl font-bold text-pink-500 mb-4">About Us</h2>
                    <p className="text-gray-700 mb-6">
                        Welcome to our Bookstore! We are a passionate team of book lovers committed to providing a rich and diverse selection of books for readers of all ages. Our bookstore was founded with the mission to foster a love for reading and create a welcoming space for book enthusiasts.
                    </p>

                    <h3 className="text-2xl font-bold text-pink-500 mb-4">Our Mission</h3>
                    <p className="text-gray-700 mb-6">
                        Our mission is to inspire a love for reading by offering a wide range of books and creating a community space where readers can connect and share their passion for literature.
                    </p>

                    <h3 className="text-2xl font-bold text-pink-500 mb-4">Our Values</h3>
                    <ul className="list-disc pl-6 text-gray-700 mb-6">
                        <li>Passion: We are passionate about books and believe in their power to transform lives.</li>
                        <li>Community: We strive to create a welcoming and inclusive space for all readers.</li>
                        <li>Quality: We offer a carefully curated selection of books to ensure a high-quality reading experience.</li>
                        <li>Service: We are dedicated to providing excellent customer service and personalized recommendations.</li>
                    </ul>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutus} alt="Bookstore" className="rounded-lg "/>
                </div>
            </div>
        </div>

    </section>
</div>

    </>
  )
}

export default About
