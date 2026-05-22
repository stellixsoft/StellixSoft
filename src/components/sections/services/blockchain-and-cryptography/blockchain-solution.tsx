export default function BlockchainSolution() {
    return (
        <section
            className="py-16 md:py-24 px-4 sm:px-6"
            style={{
                backgroundImage:
                    "url('/assets/images/background-url.webp')",
                backgroundSize: "cover, cover",
                backgroundPosition: "center, center",
                backgroundRepeat: "no-repeat, no-repeat",
            }}
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-medium text-[var(--color-deepSpace)] mb-6">Enterprise Blockchain and{" "}
                  <span
                        className="font-medium"
                        style={{ color: "var(--color-electricBlue)" }}
                    >
                      Cryptography Solutions
                    </span>
                </h2>
                <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-4">Our approach to Blockchain and Cryptography ensures that every system we build is secure by design. We apply advanced cryptographic techniques such as hashing, digital signatures, and encryption to protect data integrity and ensure trust across distributed systems.
                </p>
                <p className="text-base text-[var(--color-deepSpace)] leading-relaxed mb-4">With our Blockchain integration services, businesses can seamlessly connect blockchain networks with existing enterprise systems like ERPs, CRMs, and cloud platforms—without disrupting operations.
                </p>
            </div>
        </section>
    );
}