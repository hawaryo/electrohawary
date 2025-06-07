import styles from "./ContactSection.module.css";
import {contactDetails} from "@/data/contactDetails";

export default function ContactSection() {
  return (
    <main>
      <section className={styles["contact-section"]}>
        <h2>ارقام التواصل </h2>
        {contactDetails.map(d => (
          <div className={styles["contact-card"]} key={d.id}>
            <div className={styles["location-info"]}>
              <a href={`https://maps.app.goo.gl/${d.locationId}`} target="_blank" rel="noopener noreferrer">
                <svg
                  className={styles["location-icon"]}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 34 45"
                >
                  <g clipPath="url(#a)">
                    <path
                      fill="#000"
                      d="M19.062 43.595c4.409-5.517 14.463-18.889 14.463-26.4 0-9.109-7.391-16.5-16.5-16.5s-16.5 7.391-16.5 16.5c0 7.511 10.055 20.883 14.463 26.4 1.057 1.315 3.016 1.315 4.073 0zm-2.037-31.9a5.5 5.5 0 0 1 5.5 5.5 5.5 5.5 0 0 1-5.5 5.5 5.5 5.5 0 0 1-5.5-5.5 5.5 5.5 0 0 1 5.5-5.5z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M.525.695h33v44h-33z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <p className={styles["address-text"]}>{d.address}</p>
            </div>
            <div className={styles["contact-info"]}>
              <p className={styles["name"]}>{d.name}</p>
              <div className={styles["phone-wrapper"]}>
                <a href={`tel:${d.mobile}`} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 32">
                    <path d="M2.363 0C1.058 0 0 1.058 0 2.363v25.588c0 1.305 1.058 2.361 2.363 2.361h12.545c1.305 0 2.363-1.056 2.363-2.361V2.363C17.272 1.058 16.213 0 14.908 0zm-.074 4.424h12.695c.158 0 .287.127.287.285v19.295c0 .158-.129.287-.287.287H2.289c-.158 0-.287-.129-.287-.287V4.709c0-.158.129-.285.287-.285zm6.346 21.072c.853 0 1.545.69 1.545 1.543s-.692 1.545-1.545 1.545-1.543-.692-1.543-1.545a1.54 1.54 0 0 1 1.543-1.543z" />
                  </svg>
                </a>
                <a href={`https://wa.me/+20${d.mobile}`} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 28">
                    <path
                      fill="#67c15e"
                      fillRule="evenodd"
                      d="M14.502.001C8.814-.074 3.097 3.347.94 8.693-.811 12.84-.067 17.875 2.759 21.372L.951 26.378l5.577-1.655c5.627 3.538 13.567 2.797 18.357-1.84 3.477-3.203 5.019-8.383 3.628-12.932C26.961 4.512 21.723.61 16.174.089a15.71 15.71 0 0 0-1.672-.088zm-4.051 6.844c-.929-1.6-1.88-1.049-3.548.508-1.514 1.72-.833 4.278.405 5.968 2.211 3.216 5.289 6.012 9.113 7.098 1.659.607 3.605.946 5.19-.059 1.19-.537 1.976-2.115 1.48-3.316-1.27-.601-2.534-1.264-3.875-1.685-1.353.262-1.537 2.749-3.585 1.639-2.161-.945-5.342-4.238-5.191-4.67.15-.561 2.229-1.166 1.032-3.411-.314-.704-.707-1.368-1.02-2.072z"
                    />
                  </svg>
                </a>
                <p>{d.mobile}</p>
              </div>
              <div className={styles["tel-wrapper"]}>
                <a href={`tel:02${d.tel}`} target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 30">
                    <path d="M6.494 18.064c-1.471-1.802-2.78-3.724-3.948-5.734C1.544 10.521.507 8.663.025 6.641-.427 3.194 5.259-1.414 7.639.415c.645.55 2.756 4.62 2.738 6.593-.524 1.547-2.158 2.193-3.153 3.366.355 1.603 1.764 2.947 2.761 4.293 1.719 2.024 3.575 3.953 5.652 5.613 1.722 1.477 2.74-2.926 5.839-2.342.967.461 5.837 3.503 5.421 5.008-1.011 2.429-2.425 3.663-4.199 4.839-1.422.912-3.144.656-4.665-.141-3.876-1.971-7.677-5.155-11.54-9.58z" />
                  </svg>
                </a>
                <p>{d.tel}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
