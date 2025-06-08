// import React, { useState } from "react";
import { useState } from "react";
const MyMemories = () => {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   name: "",
  //   events: [
  //     {
  //       id: Date.now(),
  //       description: "",
  //       title: "",
  //     },
  //   ],
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };
  // const addEvent = () =>
  //   setFormData((prev) => ({
  //     ...prev,
  //     events: [
  //       ...prev.events,
  //       {
  //         id: Date.now(),
  //         description: "",
  //         title: "",
  //       },
  //     ],
  //   }));

  // const updateEvent = (id, field, value) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     events: prev.events.map((event) =>
  //       event.id === id
  //         ? {
  //             ...event,
  //             [field]: value,
  //           }
  //         : event
  //     ),
  //   }));
  // };

  // const removeEvent = (id) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     events: prev.events.filter((e) => e.id !== id),
  //   }));
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // setFormData((event) => {
  //   //   console.log(" Name: ", event.name);
  //   //   console.log("Email : ", event.email);
  //   // });
  // };

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    // const file = e.target.files[0];
    const file = Array.from(e.target.files);
    if (file) {
      console.log("THis file 2 : ", file);
      setImage(URL.createObjectURL(file));
    }
  };

  const handleRemove = () => {
    setImage(null);
  };
  return (
    <div>
      <div className="w-full h-screen m-20 p-20">
        <input type="file" accept="image/*" onChange={handleChange} />
        {image && (
          <img
            src={image}
            alt="Preview"
            style={{ width: "300px", marginTop: "10px" }}
          />
        )}
        <button type="button" onClick={handleRemove}>
          remove
        </button>
      </div>
    </div>
    // <div className="w-full h-screen flex flex-col items-center  justify-center">
    //   <h1 className="text-4xl text-center font-bold">THIS MY MEMORIES PAGE</h1>
    //   <div>
    //     <form onSubmit={onSubmit}>
    //       <div className="bg-soft-lavender p-4 m-4 text-2xl">
    //         <input
    //           type="text"
    //           placeholder="email"
    //           value={formData.email}
    //           id="email"
    //           name="email"
    //           onChange={handleChange}
    //         />
    //         <input
    //           type="text"
    //           placeholder="name"
    //           id="name"
    //           name="name"
    //           value={formData.name}
    //           onChange={handleChange}
    //         />
    //         <button type="button" onClick={addEvent}>
    //           add
    //         </button>
    //       </div>
    //       {formData.events.map((event) => (
    //         <div
    //           key={event.id}
    //           className="my-4 bg-soft-lavender p-4 m-4 text-2xl"
    //         >
    //           <input
    //             type="text"
    //             placeholder="add description"
    //             name="description"
    //             id="description"
    //             value={event.description}
    //             onChange={(e) =>
    //               updateEvent(event.id, "description", e.target.value)
    //             }
    //           />
    //           <input
    //             type="text"
    //             placeholder="add title"
    //             name="title"
    //             id="title"
    //             value={event.title}
    //             onChange={(e) => updateEvent(event.id, "title", e.target.value)}
    //           />
    //           <button type="button" onClick={() => removeEvent(event.id)}>
    //             remove
    //           </button>
    //         </div>
    //       ))}
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
    // </div>
  );
};

export default MyMemories;
