const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const sub_title = form.sub_title.value;
    const details = form.details.value;
    const tech_use = form.tech_use.value;
    const time = form.time.value;
    const links = form.links.value;
    const files = form.files.value;

    const service = { title, sub_title, details, tech_use, time, links, files };
    console.log(service);
  };
  return (
    <div className="mx-2 py-4 shadow-2xl">
      <h1>Add Service</h1>
      <form
        onSubmit={handleAddService}
        className="grid grid-cols-6 gap-10 mt-6 px-4 "
      >
        <div className="lg:col-span-3">
          <label htmlFor="title" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Service Title</span>
            </div>
            <input
              type="text"
              name="title"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="lg:col-span-3">
          <label htmlFor="sub_title" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Service Sub Title</span>
            </div>
            <input
              type="text"
              name="sub_title"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="lg:col-span-full">
          <label htmlFor="details" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Service Details</span>
            </div>
            <textarea
              placeholder="Bio"
              name="details"
              className="textarea textarea-bordered textarea-lg w-full"
            ></textarea>
          </label>
        </div>
        <div className="lg:col-span-full">
          <label htmlFor="tech_use" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Technologies Used</span>
            </div>
            <input
              type="text"
              name="tech_use"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="lg:col-span-3">
          <label htmlFor="time" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Time Period</span>
            </div>
            <input
              type="text"
              name="time"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="lg:col-span-3">
          <label htmlFor="links" className="form-control w-full ">
            <div className="label">
              <span className="label-text">Links</span>
            </div>
            <input
              type="text"
              name="links"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        <div className="lg:col-span-full">
          <fieldset className="w-full space-y-1 dark:text-gray-100">
            <label htmlFor="files" className="block text-sm font-medium">
              Attachments
            </label>
            <div className="flex">
              <input
                type="file"
                name="files"
                id="files"
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              />
            </div>
          </fieldset>
        </div>
        <input
          type="submit"
          value="Add Service"
          className="bg-blue-600 p-2 rounded-md text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddService;
