import Image from "next/image";
import ButtonLink from "@/components/button/ButtonLink";

const Contact = () => {
    return (
        <div>
            <h1 className="text-6xl mb-14 text-center">Let's Keep in Touch</h1>
            <div className="flex items-center gap-24">
                <div className="hidden flex-1 h-[500px] md:block relative">
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className='object-contain'
                    />
                </div>
                <form className='flex-1 flex flex-col gap-5'>
                    <input type="text" placeholder="name" className="p-5 bg-transparent  outline-none text-gray-400 border-2 border-gray-400 text-xl font-bold" />
                    <input type="text" placeholder="email" className="p-5 bg-transparent outline-none text-gray-400 border-2 border-gray-400 text-xl font-bold" />
                    <textarea
                        className="p-5 bg-transparent outline-none text-gray-400 border-2 border-gray-400 text-xl font-bold"
                        placeholder="message"
                        cols="20"
                        rows="10"
                    ></textarea>
                    <ButtonLink url="#">Send</ButtonLink>
                </form>
            </div>
        </div>
    );
};

export default Contact;


// .content {
//     display: flex;
//     align - items: center;
//     gap: 100px;
// }

// .imgContainer {
//     flex: 1;
//     height: 500px;
//     position: relative;
// }

// .image {
//     object - fit: contain;
//     /* animation: move 3s infinite ease alternate; */
// }

// @keyframes move {
//   from {
//         transform: translateY(-15px);
//     }
//   to {
//         transform: translateY(0px) scale(1.03);
//     }
// }

// .form {
//     flex: 1;
//     display: flex;
//     flex - direction: column;
//     gap: 20px;
// }

// .input,
// .textArea {
//     padding: 20px;
//     background - color: transparent;
//     border: none;
//     outline: none;
//     color: #bbb;
//     border: 3px solid #bbb;
//     font - size: 20px;
//     font - weight: bold;
// }