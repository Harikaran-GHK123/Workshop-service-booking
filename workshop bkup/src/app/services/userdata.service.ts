import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
// register form data
  userdata: userdatatypes = {};

  // book service form data
  bookservice: bookservfrm[] = [];

  servicetype:servicedatatype[] = [
    {
      title: "Change engine oil",
      param: "changeengineoil",
      image: "assets/shopImages/engineoilservice.jpeg",
      description: "Changing engine oil is a fundamental aspect of regular vehicle maintenance and is essential for keeping your engine running smoothly and efficiently. Here's a step-by-step guide on how to change engine oil,Let the engine run for a few minutes to warm up the oil. Warm oil flows more easily, ensuring that more of the old oil is removed during the drain. Once you've poured in the oil, wait for a minute or two to let it settle, then check the oil level using the dipstick. Add more oil if necessary. Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground.Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground.Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground.Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground. Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground. Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground. Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground. Pour the old oil from the drain pan into a sealed container. Many auto parts stores and service stations have facilities to recycle used oil. Do not pour it down the drain or onto the ground. Always consult your vehicle's manual for specific instructions and safety precautions related to your particular make and model",
      infopage: {
        image: ["assets/shopImages/sliderimages3.jpeg", "assets/shopImages/shopownerbgremove.png"]
      }
    },
    {
      title: "Engine service",
      param: "engineservice",
      image: "assets/shopImages/engineservice.jpeg",
      description: "Engine service is a comprehensive process essential for maintaining the optimal performance and longevity of any vehicle's heart, the engine. During an engine service, skilled mechanics meticulously inspect and evaluate the engine's various components, including the cylinders, pistons, valves, and gaskets. They assess the engine's oil and filter, replacing them as needed to ensure proper lubrication and prevent contaminants from damaging vital parts. The timing belt or chain, spark plugs, and fuel injectors are scrutinized for wear and replaced if necessary, ensuring efficient combustion and smooth operation. Mechanics also examine the cooling system, checking the radiator, hoses, and coolant levels to prevent overheating. Additionally, electronic components, such as sensors and the engine control module, are tested for functionality. The service may also involve a thorough cleaning to remove carbon deposits and sludge buildup, enhancing overall engine performance. Regular engine servicing not only optimizes fuel efficiency and reduces emissions but also contributes significantly to the vehicle's reliability and longevity, making it an indispensable part of routine vehicle maintenance.",
      infopage: {
        image: ["assets/shopImages/sliderimages1.jpeg", "assets/shopImages/homepagemiddlebanner.jpeg"]
      }
    },
    {
      title: "Suspension Issues",
      param: "suspensionissues",
      image: "assets/shopImages/sesspension.jpeg",
      description: "Suspension issues in a vehicle can greatly impact the overall comfort, stability, and safety of the ride. The suspension system is responsible for ensuring a smooth and controlled driving experience by absorbing shocks from uneven road surfaces and maintaining tire contact with the ground. When a vehicle experiences suspension problems, it can manifest in various ways. Worn-out shocks or struts might cause excessive bouncing and swaying, making the vehicle feel unstable and difficult to handle, especially around corners. Uneven tire wear is another common sign, indicating misaligned or damaged suspension components. Potholes or rough roads can lead to the misalignment of wheels, causing steering wheel vibration and compromised steering control. Moreover, worn bushings and ball joints can produce clunking or squeaking noises while driving over bumps. Addressing suspension issues promptly is crucial, as neglecting them not only compromises ride comfort but also jeopardizes road safety. A well-maintained suspension system ensures proper handling, enhances stability, and contributes significantly to the overall driving experience, making it essential for both driver satisfaction and passenger safety. Regular inspections by skilled mechanics are key to identifying and resolving suspension problems, ensuring a smooth and secure journey on the road.",
      infopage: {
        image: ["assets/shopImages/sliderimages1.jpeg", "assets/shopImages/sliderimages3.jpeg"]
      }
    },
    {
      title: " Electrical Problems (For Electric Bikes)",
      param: "electronincproblems",
      image: "assets/shopImages/electricalservice.jpeg",
      description: "Electrical problems in electric bikes can be particularly challenging, given their reliance on a complex electrical system for power delivery and control. These issues encompass a range of malfunctions, including battery-related problems, wiring issues, and sensor failures. One of the most common concerns involves the battery, as it serves as the lifeblood of an electric bike. Battery problems can result in diminished range, reduced power output, or sudden shutdowns. Wiring problems, such as damaged or frayed cables, can disrupt the flow of electricity, leading to intermittent power loss and operational inconsistencies. Sensor failures can affect critical functions like pedal-assist or throttle response, causing erratic or non-responsive behavior. In addition, problems with the electronic display or controller can hinder the rider's ability to monitor and adjust settings, impacting the overall ride experience. Addressing electrical issues in electric bikes typically requires specialized knowledge and diagnostic tools, making professional assistance important. Regular maintenance and care, including proper storage and charging practices, can help prevent many of these problems. Timely identification and resolution of electrical issues are crucial to ensuring the reliability, performance, and safety of electric bikes, ultimately preserving their eco-friendly and efficient mode of transportation.",
      infopage: {
        image: ["assets/shopImages/sliderimages3.jpeg", "assets/shopImages/sesspension.jpeg"]
      }
    },
    {
      title: " Wheel Alignment services",
      param: "wheelalignment",
      image: "assets/shopImages/wheelservice.jpeg",
      description: "Wheel alignment services are crucial for maintaining the stability, handling, and safety of a vehicle. Over time, factors such as potholes, rough roads, or even minor collisions can lead to misaligned wheels, causing uneven tire wear, steering problems, and reduced fuel efficiency. During a wheel alignment service, skilled technicians use specialized equipment to measure and adjust the angles of the wheels according to the manufacturer's specifications. This process includes adjusting the camber (vertical tilt), caster (front-to-back slope), and toe (parallelism of the wheels) angles. Proper wheel alignment ensures that all four wheels are in precise alignment with each other and perpendicular to the ground, optimizing tire performance and longevity. Well-aligned wheels contribute to even tire wear, improving fuel efficiency and saving the owner money on replacements in the long run. Moreover, it enhances steering response and stability, providing a smoother and safer driving experience. Regular wheel alignments are particularly vital after suspension repairs, tire replacements, or any impact that could potentially knock the wheels out of alignment. By investing in wheel alignment services, vehicle owners not only enhance the longevity of their tires but also ensure optimal handling, safety, and fuel efficiency, making it a fundamental aspect of routine vehicle maintenance.",
      infopage: {
        image: ["assets/shopImages/homepagemiddlebanner.jpeg", "assets/shopImages/shopownerbgremove.png"]
      }
    }

  ]

  constructor() {

  }

  setuserdata(shopuser: userdatatypes) {
    this.userdata = shopuser;
  }
  setbookservdata(bookservfrm: bookservfrm) {
    this.bookservice.push(bookservfrm);
  }

  getuserdata(): userdatatypes {
    return this.userdata;
  }


  getbookserviecedata(): bookservfrm[] {
    return this.bookservice;
  }

  getserviceinfo():servicedatatype[]{
    return this.servicetype;
  }

}

export class userdatatypes {
  first_name?: string;
  last_name?: string;
  email?: string;
  password?: number;
}

export class bookservfrm {
  first_name?: string;
  last_name?: string;
  shortly?: string;
  briefly?: string;
  text?: string;
  Upload?: string;
  token?: string;
  date?: string;
}

export class servicedatatype {
  title?: string;
  param?: string;
  image?: string;
  description?: string;
  infopage?: {
    image?:string[]
  }

}



