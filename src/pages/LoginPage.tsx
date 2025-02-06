import { useLoginPage } from "@/hooks";

export default function LoginPage() {
  const {
    form: {
      handleSubmit,
      register,
      formState: { errors },
    },
    onSubmit,
  } = useLoginPage();

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
        >
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input validator"
                placeholder="mail@site.com"
                required
                {...register("email")}
              />
              <div className="validator-hint">{errors.email?.message}</div>
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input validator"
                placeholder="Password"
                required
                {...register("password")}
              />
              <div className="validator-hint">{errors.password?.message}</div>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
}
