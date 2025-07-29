const ComingSoon = () => {
  return (
    <section className="entrance-message">
      <div className="h-full col-center gap-10">
        <img alt="logo" className="entrance-logo" src="/images/logo.webp" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div className="flex-center gap-10">
          <img className="md:w-32 w-20" src="/images/ps-logo.svg" />

          <img className="md:w-52 w-40" src="/images/x-logo.svg" />
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
