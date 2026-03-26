import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isSameDay,
  isBefore,
  startOfDay,
} from "date-fns";

// ─── Icons (inline SVG components) ─────────────────────────────────────────

const Icon = ({ d, size = 16, className = "", strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {Array.isArray(d) ? (
      d.map((p, i) => <path key={i} d={p} />)
    ) : (
      <path d={d} />
    )}
  </svg>
);

const UserIcon = (p) => (
  <Icon
    {...p}
    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
  />
);
const MailIcon = (p) => (
  <Icon
    {...p}
    d={[
      "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      "M22 6l-10 7L2 6",
    ]}
  />
);
const PhoneIcon = (p) => (
  <Icon
    {...p}
    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  />
);
const MsgIcon = (p) => (
  <Icon
    {...p}
    d={["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]}
  />
);
const ArrowRightIcon = (p) => <Icon {...p} d={["M5 12h14", "M12 5l7 7-7 7"]} />;
const ArrowLeftIcon = (p) => (
  <Icon {...p} d={["M19 12H5", "M12 19l-7-7 7-7"]} />
);
const CheckIcon = (p) => (
  <Icon
    {...p}
    d={["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"]}
  />
);
const CalIcon = (p) => (
  <Icon
    {...p}
    d={[
      "M8 2v4",
      "M16 2v4",
      "M3 10h18",
      "M21 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8z",
    ]}
  />
);
const ClockIcon = (p) => (
  <Icon
    {...p}
    d={["M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z", "M12 6v6l4 2"]}
  />
);
const AlertTriIcon = (p) => (
  <Icon
    {...p}
    d={[
      "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z",
      "M12 9v4",
      "M12 17h.01",
    ]}
  />
);
const ChevronLeftIcon = (p) => <Icon {...p} d="M15 18l-6-6 6-6" />;
const ChevronRightIcon = (p) => <Icon {...p} d="M9 18l6-6-6-6" />;
const CheckCircleIcon = (p) => (
  <Icon
    {...p}
    d={["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4L12 14.01l-3-3"]}
  />
);

// ─── Toast ──────────────────────────────────────────────────────────────────

const useToast = () => {
  const [toasts, setToasts] = useState([]);
  const show = useCallback((msg, type = "success") => {
    const id = Date.now();
    setToasts((t) => [...t, { id, msg, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4000);
  }, []);
  return {
    toasts,
    toast: {
      success: (m) => show(m, "success"),
      error: (m) => show(m, "error"),
    },
  };
};

const ToastContainer = ({ toasts }) => (
  <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
    <AnimatePresence>
      {toasts.map((t) => (
        <motion.div
          key={t.id}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          className={`px-4 py-3 text-sm font-medium shadow-lg pointer-events-auto ${t.type === "success" ? "bg-rose-600 text-white" : "bg-red-700 text-white"}`}
        >
          {t.msg}
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
);

// ─── Mini Calendar ──────────────────────────────────────────────────────────

const MiniCalendar = ({ selected, onSelect }) => {
  const today = startOfDay(new Date());
  const [viewDate, setViewDate] = useState(selected || today);

  const start = startOfMonth(viewDate);
  const end = endOfMonth(viewDate);
  const days = eachDayOfInterval({ start, end });
  const startPad = getDay(start);
  const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const prev = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const next = () =>
    setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  return (
    <div className="select-none">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={prev}
          className="p-1 hover:text-rose-500 transition-colors"
        >
          <ChevronLeftIcon size={16} />
        </button>
        <span
          className="text-sm font-semibold tracking-wide uppercase"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "15px",
          }}
        >
          {format(viewDate, "MMMM yyyy")}
        </span>
        <button
          onClick={next}
          className="p-1 hover:text-rose-500 transition-colors"
        >
          <ChevronRightIcon size={16} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 mb-1">
        {DAY_NAMES.map((d) => (
          <div
            key={d}
            className="text-center text-xs font-medium text-stone-400 py-1"
          >
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: startPad }).map((_, i) => (
          <div key={`p${i}`} />
        ))}
        {days.map((day) => {
          const isPast = isBefore(day, today);
          const isSelected = selected && isSameDay(day, selected);
          const isToday = isSameDay(day, today);
          return (
            <button
              key={day.toISOString()}
              disabled={isPast}
              onClick={() => onSelect(day)}
              className={`
                w-full aspect-square flex items-center justify-center text-xs font-medium transition-all
                ${isPast ? "text-stone-300 cursor-not-allowed" : "hover:bg-rose-50 hover:text-rose-600 cursor-pointer"}
                ${isSelected ? "bg-rose-600 text-white hover:bg-rose-600 hover:text-white" : ""}
                ${isToday && !isSelected ? "ring-1 ring-rose-300 text-rose-600 font-bold" : ""}
              `}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

// ─── Data ───────────────────────────────────────────────────────────────────

const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const hour = i === 0 ? 12 : i > 12 ? i - 12 : i;
  const ampm = i < 12 ? "AM" : "PM";
  return `${hour.toString().padStart(2, "0")}:00 ${ampm}`;
});

const SERVICES = [
  "Simple Beat with Lashes",
  "Full Face with Lashes",
  "Full Face with Lashes and Gele",
  "Photoshoot Service",
  "Home/Hotel Service Makeup (Add-On)",
  "Bridal Glam — Consultation",
  "Bridal Glam",
  "Bridal Party Glam — Soft Glam Look",
  "Bridal Party Glam — Full Glam Look",
  "Bride Gele (Bridal Looks)",
  "Bridesmaid (Gele Tying)",
  "Owambe Gele (Gele Tying)",
  "Mother of the Bride/Groom (Gele Tying)",
];

const isOutsideStandardHours = (timeStr) => {
  if (!timeStr) return false;
  const [time, period] = timeStr.split(" ");
  let [hour] = time.split(":").map(Number);
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return hour < 8 || hour > 19;
};

// ─── Validation ─────────────────────────────────────────────────────────────

const validate = (values) => {
  const errors = {};
  if (!values.customerName || values.customerName.trim().length < 2)
    errors.customerName = "Name must be at least 2 characters";
  if (!values.contactMethod)
    errors.contactMethod = "Please select a contact method";
  if (!values.contactValue) {
    errors.contactValue = "Contact information is required";
  } else if (
    values.contactMethod === "email" &&
    !/^\S+@\S+\.\S+$/.test(values.contactValue)
  ) {
    errors.contactValue = "Please enter a valid email address";
  } else if (
    values.contactMethod === "phone" &&
    values.contactValue.replace(/\D/g, "").length < 10
  ) {
    errors.contactValue = "Please enter a valid phone number";
  }
  if (!values.service) errors.service = "Please select a service";
  return errors;
};

// ─── Field Components ────────────────────────────────────────────────────────

const FieldError = ({ msg }) =>
  msg ? (
    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
      <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
      {msg}
    </p>
  ) : null;

const inputClass =
  "w-full px-3 py-2.5 border text-sm bg-white outline-none transition-all focus:border-rose-400 focus:ring-2 focus:ring-rose-100 placeholder:text-stone-300";
const labelClass =
  "block text-xs font-semibold capitalize tracking-wider text-stone-500 mb-1.5";

// ─── Main Component ──────────────────────────────────────────────────────────

export default function BookingPage() {
  const { toasts, toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const [values, setValues] = useState({
    customerName: "",
    contactMethod: "phone",
    contactValue: "",
    service: "",
    notes: "",
    preferredDate: null,
    preferredTime: "",
  });

  const errors = validate(values);
  const step2Errors = {};
  if (!values.preferredDate) step2Errors.preferredDate = "Please select a date";
  if (!values.preferredTime) step2Errors.preferredTime = "Please select a time";

  // Sync page title on step change
  useEffect(() => {
    document.title =
      step === 1
        ? "PrettyBMUA — Book Your Appointment"
        : "PrettyBMUA — Choose Date & Time";
    return () => {
      document.title = "PrettyBMUA";
    };
  }, [step]);

  const set = (field) => (e) => {
    const val = e && e.target ? e.target.value : e;
    setValues((v) => ({ ...v, [field]: val }));
  };

  const touch = (field) => setTouched((t) => ({ ...t, [field]: true }));

  const handleNext = () => {
    setTouched({
      customerName: true,
      contactMethod: true,
      contactValue: true,
      service: true,
    });
    const e = validate(values);
    if (Object.keys(e).length === 0) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, preferredDate: true, preferredTime: true }));
    if (!values.preferredDate || !values.preferredTime) return;

    setIsSubmitting(true);
    try {
      const formattedDate = format(values.preferredDate, "yyyy-MM-dd");
      const customerEmail =
        values.contactMethod === "email" ? values.contactValue : "Not provided";
      const customerPhone =
        values.contactMethod === "phone" ? values.contactValue : "Not provided";
      const serviceDetails =
        values.service + (values.notes ? ` (Notes: ${values.notes})` : "");
      const message = `Booking Request:\nName: ${values.customerName}\nEmail: ${customerEmail}\nPhone: ${customerPhone}\nDate: ${formattedDate}\nTime: ${values.preferredTime}\nService: ${serviceDetails}`;
      const whatsappUrl = `https://wa.me/16303971565?text=${encodeURIComponent(message)}`;

      toast.success("Booking request prepared! Redirecting to WhatsApp...");
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setValues({
          customerName: "",
          contactMethod: "phone",
          contactValue: "",
          service: "",
          notes: "",
          preferredDate: null,
          preferredTime: "",
        });
        setTouched({});
        setStep(1);
      }, 1200);
    } catch {
      toast.error("Failed to prepare booking request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer toasts={toasts} />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

     { box-sizing: border-box; margin: 0; padding: 0; }

        

        .booking-bg {
          min-height: 100vh;
          background: 
            radial-gradient(ellipse at 10% 20%, rgba(244,63,94,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 80%, rgba(251,207,232,0.12) 0%, transparent 50%),
            #faf8f6;
        }

        .ornament {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: currentColor;
          opacity: 0.35;
          vertical-align: middle;
          margin: 0 10px;
        }

        .step-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          transition: all 0.3s;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #f1c4ce; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f43f5e; }

        .time-btn {
          padding: 9px 6px;
          border: 1px solid #e7e5e4;
          font-size: 11.5px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s;
          background: white;
          color: #44403c;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.02em;
        }
        .time-btn:hover { border-color: #f43f5e; background: #fff5f6; color: #f43f5e; }
        .time-btn.selected { background: #f43f5e; border-color: #f43f5e; color: white; }
        .time-btn.outside { border-color: #fed7aa; background: #fffbf5; color: #92400e; }
        .time-btn.outside:hover { border-color: #f97316; background: #fff7ed; }
        .time-btn.outside.selected { background: #f97316; border-color: #f97316; color: white; }

        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a8a29e' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px !important;
        }
      `}</style>

      <div className="booking-bg" style={{ paddingBottom: "80px" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 20px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", padding: "60px 0 40px" }}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(36px, 6vw, 52px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#1c1917",
              }}
            >
              Book Your Appointment
            </h1>

            {/* Step indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginTop: "28px",
              }}
            >
              {[1, 2].map((s, i) => (
                <>
                  <div
                    key={s}
                    className="step-pill"
                    style={{
                      background: step >= s ? "#ffa1ad" : "#e7e5e4",
                      color: step >= s ? "black" : "#a8a29e",
                    }}
                  >
                    {s}
                  </div>
                  {i === 0 && (
                    <div
                      style={{
                        height: "1px",
                        width: "40px",
                        background: step >= 2 ? "#f43f5e" : "#e7e5e4",
                        transition: "background 0.3s",
                      }}
                    />
                  )}
                </>
              ))}
            </div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#a8a29e",
                textTransform: "uppercase",
                marginTop: "10px",
              }}
            >
              Step {step} of 2
            </p>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              background: "#fbf9f9",
              border: "1px solid rgba(244,63,94,0.12)",
              padding: "14px 18px",
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            <p
              style={{ fontSize: "12.5px", color: "#78716c", lineHeight: 1.7 }}
            >
              <strong style={{ color: "#44403c" }}>Important:</strong> A 50%
              non-refundable deposit is required to secure your appointment. We
              require 24-hour notice for cancellations. A $50 late fee applies
              for every 20 minutes of delay.
            </p>
          </div>

          {/* Card */}
          <div
            style={{
              background: "white",
              border: "1px solid #e7e5e4",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}
          >
            <AnimatePresence mode="wait">
              {/* ── STEP 1 ── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 24 }}
                  transition={{ duration: 0.28 }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid #f5f5f4",
                      padding: "24px 28px",
                      background: "#fdf9f9",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "25px",
                        fontWeight: 700,
                        color: "black",
                      }}
                    >
                      Your Details
                    </h2>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#847772",
                        marginTop: "4px",
                      }}
                    >
                      Tell us about yourself and the service you need.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "22px",
                    }}
                  >
                    {/* Name */}
                    <div>
                      <label
                        className={labelClass}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <UserIcon size={12} color="#f43f5e" /> Full Name{" "}
                        <span style={{ color: "#f43f5e" }}>*</span>
                      </label>
                      <input
                        className={inputClass}
                        placeholder="Enter your full name"
                        value={values.customerName}
                        onChange={set("customerName")}
                        onBlur={() => touch("customerName")}
                        style={{
                          border:
                            touched.customerName && errors.customerName
                              ? "1px solid #f43f5e"
                              : "1px solid #e7e5e4",
                        }}
                      />
                      {touched.customerName && (
                        <FieldError msg={errors.customerName} />
                      )}
                    </div>

                    {/* Contact Method + Value */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "20px",
                      }}
                    >
                      <div>
                        <label className={labelClass}>
                          Contact Method{" "}
                          <span style={{ color: "#f43f5e" }}>*</span>
                        </label>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {["phone", "email"].map((method) => (
                            <label
                              key={method}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                padding: "10px 12px",
                                border: `1px solid ${values.contactMethod === method ? "#ffa1ad" : "#e7e5e4"}`,
                                background:
                                  values.contactMethod === method
                                    ? "#fff5f6"
                                    : "white",
                                cursor: "pointer",
                                transition: "all 0.15s",
                                fontSize: "13px",
                                fontWeight: 500,
                              }}
                            >
                              <input
                                type="radio"
                                name="contactMethod"
                                value={method}
                                checked={values.contactMethod === method}
                                onChange={() => {
                                  set("contactMethod")(method);
                                  setValues((v) => ({
                                    ...v,
                                    contactMethod: method,
                                    contactValue: "",
                                  }));
                                }}
                                style={{ accentColor: "#f43f5e" }}
                              />
                              {method === "phone" ? (
                                <PhoneIcon size={13} />
                              ) : (
                                <MailIcon size={13} />
                              )}
                              {method.charAt(0).toUpperCase() + method.slice(1)}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                        }}
                      >
                        <label className={labelClass}>
                          {values.contactMethod === "phone"
                            ? "Phone Number"
                            : "Email Address"}{" "}
                          <span style={{ color: "#f43f5e" }}>*</span>
                        </label>
                        <input
                          className={inputClass}
                          type={
                            values.contactMethod === "phone" ? "tel" : "email"
                          }
                          placeholder={
                            values.contactMethod === "phone"
                              ? "+1 (234) 567-890"
                              : "your@email.com"
                          }
                          value={values.contactValue}
                          onChange={set("contactValue")}
                          onBlur={() => touch("contactValue")}
                          style={{
                            border:
                              touched.contactValue && errors.contactValue
                                ? "1px solid #f43f5e"
                                : "1px solid #e7e5e4",
                          }}
                        />
                        {touched.contactValue && (
                          <FieldError msg={errors.contactValue} />
                        )}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className={labelClass}>
                        Service Required{" "}
                        <span style={{ color: "#f43f5e" }}>*</span>
                      </label>
                      <select
                        className={inputClass}
                        value={values.service}
                        onChange={set("service")}
                        onBlur={() => touch("service")}
                        style={{
                          border:
                            touched.service && errors.service
                              ? "1px solid #f43f5e"
                              : "1px solid #e7e5e4",
                        }}
                      >
                        <option value="">Select a makeup service</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      {touched.service && <FieldError msg={errors.service} />}
                    </div>

                    {/* Notes */}
                    <div>
                      <label
                        className={labelClass}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <MsgIcon size={12} /> Special Requests (Optional)
                      </label>
                      <textarea
                        className={inputClass}
                        placeholder="Any specific looks, allergies, or details we should know about?"
                        value={values.notes}
                        onChange={set("notes")}
                        rows={3}
                        style={{ resize: "none", border: "1px solid #e7e5e4" }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        paddingTop: "8px",
                      }}
                    >
                      <button
                        onClick={handleNext}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "11px 28px",
                          background: "#ffa1ad",
                          color: "black",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.background = "#e11d48")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.background = "#f43f5e")
                        }
                      >
                        Next Step <ArrowRightIcon size={15} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 2 ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.28 }}
                >
                  <div
                    style={{
                      borderBottom: "1px solid #f5f5f4",
                      padding: "24px 28px",
                      background: "#fdf9f9",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "serif",
                        fontSize: "25px",
                        fontWeight: 700,
                        color: "#1c1917",
                      }}
                    >
                      Date & Time
                    </h2>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#a8a29e",
                        marginTop: "4px",
                      }}
                    >
                      Select your preferred appointment slot.
                    </p>
                  </div>

                  <div
                    style={{
                      padding: "28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "28px",
                    }}
                  >
                    {/* ================= SUMMARY ================= */}
                    <div
                      style={{
                        background: "rgba(244,63,94,0.04)",
                        border: "1px solid rgba(244,63,94,0.12)",
                        padding: "16px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                        gap: "16px",
                      }}
                    >
                      {/* Left side */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "#1c1917",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <CheckCircleIcon
                            size={14}
                            style={{ color: "#f43f5e" }}
                          />
                          {values.customerName} · {values.service}
                        </p>

                        <p
                          style={{
                            fontSize: "12px",
                            color: "#a8a29e",
                          }}
                        >
                          Contact: {values.contactValue}
                        </p>

                        {values.preferredTime &&
                          isOutsideStandardHours(values.preferredTime) && (
                            <div
                              style={{
                                marginTop: "6px",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                background: "#fff7ed",
                                color: "#92400e",
                                fontSize: "11px",
                                fontWeight: 600,
                                padding: "5px 10px",
                                border: "1px solid #fed7aa",
                                width: "fit-content",
                              }}
                            >
                              <AlertTriIcon size={11} />
                              Extra charges apply for {values.preferredTime}
                            </div>
                          )}
                      </div>

                      {/* Right side */}
                      <button
                        onClick={handleBack}
                        style={{
                          padding: "8px 16px",
                          border: "1px solid #e7e5e4",
                          background: "white",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          color: "#78716c",
                          letterSpacing: "0.03em",
                        }}
                      >
                        Edit Details
                      </button>
                    </div>

                    {/* ================= DATE + TIME ================= */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "32px",
                        alignItems: "start",
                      }}
                    >
                      {/* -------- DATE COLUMN -------- */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <p
                          className={labelClass}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <CalIcon size={12} />
                          Select Date
                          <span style={{ color: "#f43f5e" }}>*</span>
                        </p>

                        <div
                          style={{
                            border: "1px solid #e7e5e4",
                            padding: "16px",
                            background: "white",
                          }}
                        >
                          <MiniCalendar
                            selected={values.preferredDate}
                            onSelect={(d) =>
                              setValues((v) => ({ ...v, preferredDate: d }))
                            }
                          />
                        </div>

                        {touched.preferredDate && !values.preferredDate && (
                          <FieldError msg="Please select a date" />
                        )}
                      </div>

                      {/* -------- TIME COLUMN -------- */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <p
                          className={labelClass}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <ClockIcon size={12} />
                          Select Time
                          <span style={{ color: "#f43f5e" }}>*</span>
                        </p>

                        <div
                          className="custom-scrollbar"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "8px",
                            maxHeight: "280px",
                            overflowY: "auto",
                            paddingRight: "6px",
                          }}
                        >
                          {TIME_SLOTS.map((time) => {
                            const isOutside = isOutsideStandardHours(time);
                            const isSelected = values.preferredTime === time;

                            return (
                              <button
                                key={time}
                                type="button"
                                className={`time-btn ${isSelected ? "selected" : ""} ${
                                  isOutside ? "outside" : ""
                                }`}
                                onClick={() =>
                                  setValues((v) => ({
                                    ...v,
                                    preferredTime: time,
                                  }))
                                }
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>

                        {touched.preferredTime && !values.preferredTime && (
                          <FieldError msg="Please select a time" />
                        )}
                      </div>
                    </div>

                    {/* Outside hours warning */}
                    <AnimatePresence>
                      {values.preferredTime &&
                        isOutsideStandardHours(values.preferredTime) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: "hidden" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "flex-start",
                                background: "#fffbeb",
                                border: "1px solid #fde68a",
                                padding: "12px 16px",
                              }}
                            >
                              <AlertTriIcon
                                size={15}
                                style={{
                                  color: "#d97706",
                                  flexShrink: 0,
                                  marginTop: "1px",
                                }}
                              />
                              <div>
                                <p
                                  style={{
                                    fontSize: "12.5px",
                                    fontWeight: 700,
                                    color: "#92400e",
                                  }}
                                >
                                  Outside Standard Hours
                                </p>
                                <p
                                  style={{
                                    fontSize: "12px",
                                    color: "#92400e",
                                    marginTop: "3px",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  Services scheduled before 8 AM or after 7 PM
                                  will incur extra charges. We will confirm the
                                  exact pricing via WhatsApp.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Actions */}
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                        paddingTop: "20px",
                        borderTop: "1px solid #f5f5f4",
                      }}
                    >
                      <button
                        onClick={handleBack}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "7px",
                          padding: "10px 18px",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "#a8a29e",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#44403c")}
                        onMouseLeave={(e) => (e.target.style.color = "#a8a29e")}
                      >
                        <ArrowLeftIcon size={15} /> Back
                      </button>

                      <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "11px 32px",
                          background: isSubmitting ? "#ffa1ad" : "#ffa1ad",
                          color: "black",
                          border: "none",
                          cursor: isSubmitting ? "not-allowed" : "pointer",
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          transition: "background 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting)
                            e.target.style.background = "#f43f5e";
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting)
                            e.target.style.background = "#ffa1ad";
                        }}
                      >
                        {isSubmitting ? (
                          "Preparing..."
                        ) : (
                          <>
                            Confirm Booking <CheckIcon size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
