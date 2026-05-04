"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendContactEmail } from "../actions/sendContactEmail";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const messageValue = watch("message", "");

  const onSubmit = async (data) => {
    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(result.error || "Failed to send message.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    }
  };

  return (
    <div className="bg-surface-container-low p-8 md:p-12 rounded-4xl border border-white/5 shadow-2xl">
      <h3 className="text-3xl font-bold text-white mb-10">Get in touch.</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant/80 uppercase tracking-widest px-1">
              Your name <span className="text-onyx-accent">*</span>
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className={`w-full bg-surface-container border ${errors.name ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-accent/50 focus:ring-1 focus:ring-onyx-accent/50 transition-all placeholder:text-white/20`}
              placeholder="Enter name"
              type="text"
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-xs px-1">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant/80 uppercase tracking-widest px-1">
              Your email <span className="text-onyx-accent">*</span>
            </label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              className={`w-full bg-surface-container border ${errors.email ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-accent/50 focus:ring-1 focus:ring-onyx-accent/50 transition-all placeholder:text-white/20`}
              placeholder="Enter email"
              type="email"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs px-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant/80 uppercase tracking-widest px-1">
              Your company
            </label>
            <input
              {...register("company")}
              className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-accent/50 focus:ring-1 focus:ring-onyx-accent/50 transition-all placeholder:text-white/20"
              placeholder="Company name"
              type="text"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-on-surface-variant/80 uppercase tracking-widest px-1">
              Budget Range
            </label>
            <input
              {...register("budget")}
              className="w-full bg-surface-container border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-onyx-accent/50 focus:ring-1 focus:ring-onyx-accent/50 transition-all placeholder:text-white/20"
              placeholder="In USD"
              type="text"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-on-surface-variant/80 uppercase tracking-widest px-1">
            Message <span className="text-onyx-accent">*</span>
          </label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className={`w-full bg-surface-container border ${errors.message ? 'border-red-500' : 'border-white/5'} rounded-xl px-4 py-3 text-white h-32 resize-none focus:outline-none focus:border-onyx-accent/50 focus:ring-1 focus:ring-onyx-accent/50 transition-all placeholder:text-white/20`}
            placeholder="Type here..."
            disabled={isSubmitting}
            maxLength={250}
          ></textarea>
          <div className="flex justify-between items-center px-1">
            {errors.message ? (
              <p className="text-red-500 text-xs">{errors.message.message}</p>
            ) : (
              <div></div>
            )}
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
              {messageValue.length}/250
            </span>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-onyx-accent hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-4 rounded-xl font-extrabold text-sm tracking-widest uppercase transition-all shadow-lg shadow-onyx-accent/20 w-full md:w-auto ml-auto flex justify-center items-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
