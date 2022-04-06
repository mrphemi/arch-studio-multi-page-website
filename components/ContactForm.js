import Button from "./Button";

export default function ContactForm() {
  return (
    <form>
      <div className="space-y-8">
        <input
          type="text"
          placeholder="Name"
          className="border-b border-b-very-dark-blue pb-4 pl-8 pr-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          className="border-b border-b-very-dark-blue pb-4 pl-8 pr-4 w-full"
        />
        <textarea
          cols="30"
          rows="3"
          placeholder="Message"
          className="border-b border-b-very-dark-blue pb-4 pl-8 pr-4 resize-none w-full"
        ></textarea>
      </div>
      <div className="flex justify-end">
        <Button className="space-x-0 px-6 -mt-2" />
      </div>
    </form>
  );
}
