import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getThemeStyles } from '../../themes/themeConfig';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { appData } from '../../data';
import SectionTitle from '../common/SectionTitle';

const Contact = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.currentTheme);
  const themeStyles = getThemeStyles(currentTheme);
  const { contact } = appData;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get current date in a professional format
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    
    // Create mailto link with professionally formatted data
    const subject = `Professional Inquiry from ${formData.name}`;
    const body = 
`Dear ${appData.user?.name},

I hope this email finds you well. I am writing to you after visiting your portfolio website.

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Date: ${currentDate}

Message:
${formData.message}

I look forward to your response.

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default mail client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay to allow the mail client to open
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className={`py-20 ${themeStyles.contactSectionStyle}`}>
      <div className="container mx-auto px-4">
        <SectionTitle title="Contact Me" subtitle="Get In Touch" />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="md:col-span-1 space-y-6" variants={itemVariants}>
            <motion.div
              className={`p-6 rounded-lg ${themeStyles.contactCardStyle} flex flex-col items-center text-center transition-all duration-300`}
              whileHover={{ y: -5 }}
            >
              <MdEmail className={`text-3xl mb-3 ${themeStyles.iconColor}`} />
              <h4 className="text-lg font-medium mb-1">Email</h4>
              <p className="text-gray-600 mb-3">{contact.email}</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium hover:underline"
              >
                Send a message
              </a>
            </motion.div>

            {contact.phone && (
              <motion.div
                className={`p-6 rounded-lg ${themeStyles.contactCardStyle} flex flex-col items-center text-center transition-all duration-300`}
                whileHover={{ y: -5 }}
              >
                <FaWhatsapp className={`text-3xl mb-3 ${themeStyles.iconColor}`} />
                <h4 className="text-lg font-medium mb-1">WhatsApp</h4>
                <p className="text-gray-600 mb-3">{contact.phone}</p>
                <a
                  href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
                  className="text-sm font-medium hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Send a message
                </a>
              </motion.div>
            )}

            <motion.div
              className={`p-6 rounded-lg ${themeStyles.contactCardStyle} flex flex-col items-center text-center transition-all duration-300`}
              whileHover={{ y: -5 }}
            >
              <HiLocationMarker className={`text-3xl mb-3 ${themeStyles.iconColor}`} />
              <h4 className="text-lg font-medium mb-1">Location</h4>
              <p className="text-gray-600">{contact.location}</p>
            </motion.div>
          </motion.div>

          <motion.div className="md:col-span-2" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 ${themeStyles.contactInputStyle} focus:outline-none`}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 ${themeStyles.contactInputStyle} focus:outline-none`}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  rows={7}
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 ${themeStyles.contactInputStyle} focus:outline-none resize-none`}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className={`px-6 py-3 rounded-md font-medium ${themeStyles.contactButtonStyle} transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;