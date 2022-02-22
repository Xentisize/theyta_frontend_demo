import { SiMinutemailer } from "react-icons/si"

const Team = () => {
  return (
    <div className="bg-slate-100" id="team">
      <div className="flex flex-row py-12 basis-full">
        <div className="text-center flex-auto w-full basis-full flex-wrap">
          <h2 className="font-semibold text-3xl">Our Team</h2>
          <p className="pt-2 text-lg">We are talents from different fields so as to ensure TheyTa understands all your demand.</p>
        </div>
      </div>

      <div className="flex flex-row justify-evenly grow px-5 flex-wrap">
        <div className="basis-1/2 lg:basis-1/4 items-center">
          <div className="flex flex-col">
            <div className="basis-full grow self-center">
              <img src="/images/profile/character_v01.png" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-2xl">Charlie</h3>
              <p className="text-lg">Business Development Manager</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 lg:basis-1/4">
        <div className="flex flex-col">
            <div className="basis-full grow self-center">
              <img src="/images/profile/character_v02.png" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-2xl">Ricky</h3>
              <p className="text-lg">Tech Lead</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 lg:basis-1/4">
        <div className="flex flex-col">
            <div className="basis-full grow self-center">
              <img src="/images/profile/character_v03.png" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-2xl">Rova</h3>
              <p className="text-lg">Product Manager</p>
            </div>
          </div>
        </div>
        <div className="basis-1/2 lg:basis-1/4">
        <div className="flex flex-col">
            <div className="basis-full grow self-center">
              <img src="/images/profile/character_v04.png" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-2xl">Silverado</h3>
              <p className="text-lg">UX/UI Designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-2">
        <a className="btn gap-3 drop-shadow-sm border-none basis-full text-lg nd:text-2xl bg-slate-100 hover:bg-slate-200 text-black" href="mailto:info@theyta.com">
          <SiMinutemailer />info@theyta.com
        </a>
      </div>
    </div>
  )
}

export default Team
