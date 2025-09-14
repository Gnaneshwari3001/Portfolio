import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Twin Route Forensics",
    summary:
      "Framework for restoring altered text in digital forensics using cryptography and error-correcting codes.",
    details:
      "Designed a robust methodology combining cryptographic hashing with forward error-correction to reconstruct tampered textual artifacts in forensic workflows. Benchmarked recovery accuracy and implemented repeatable lab procedures.",
  },
  {
    title: "Fingerprint Liveness Detection",
    summary:
      "Guided filtering and hybrid image analysis to detect spoof fingerprints.",
    details:
      "Built a liveness detection pipeline leveraging guided image filtering, texture descriptors, and hybrid frequency-domain features to distinguish live finger patterns from presentation attacks. Evaluated with custom datasets.",
  },
  {
    title: "Procurement System (Cognizant)",
    summary:
      "Developed responsive UI pages and integrated forms with backend DB.",
    details:
      "Implemented modular UI, role-based views and CRUD forms. Integrated with enterprise APIs and database, focusing on accessibility, responsiveness, and form validation.",
  },
  {
    title: "Smart Job Application Tracker with AI Assistant",
    summary:
      "Full-stack system with authentication, dashboards, and automation.",
    details:
      "Engineered a job tracking platform featuring OAuth auth, resume parsing, status pipelines, reminders, and an AI assistant for job matching and email drafting. Included analytics dashboards.",
  },
  {
    title: "Real-Time Bus Tracking System (Supabase)",
    summary:
      "Map integration, alerts, and responsive design.",
    details:
      "Built live location tracking with Supabase and WebSockets, geofencing alerts, route visualizations, and mobile-first UI with offline-friendly patterns.",
  },
  {
    title: "Indian Railway Ticket Booking System (IRCTC Clone)",
    summary:
      "Live search, stations data, and admin dashboard.",
    details:
      "Implemented search and booking flows, station directory, PNR-like tracking, and admin reporting with role-based permissions.",
  },
  {
    title: "MeeSeva Online Services Portal",
    summary:
      "Government service application system with authentication and responsive UI.",
    details:
      "Built service catalogue, appointment scheduling, secure document uploads, and tracking with email notifications.",
  },
] as const;

export default function Index() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setSending(true);
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("Message sent successfully.");
        form.reset();
      } else {
        setStatus(
          json?.error ||
            "Unable to send right now. Please email directly at gnaneshwarisarla001@gmail.com.",
        );
      }
    } catch (err) {
      setStatus(
        "Network error. Please email directly at gnaneshwarisarla001@gmail.com.",
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative mx-auto mt-12 grid items-center gap-8 rounded-2xl border bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent px-6 py-12 md:mt-16 md:grid-cols-2 md:px-12">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Gnaneshwari Sarla — Computer Science Engineer | AI, Web Development & Digital Forensics
          </h1>
          <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">
            M.Tech CSE student passionate about AI, web apps, and digital forensics.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/api/resume">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Download Resume
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/gnaneshwarisarala3001/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary">LinkedIn</Button>
            </a>
            <a href="https://github.com/Gnaneshwari3001" target="_blank" rel="noreferrer">
              <Button variant="outline">GitHub</Button>
            </a>
            <a href="mailto:gnaneshwarisarla001@gmail.com">
              <Button variant="ghost">Email Me</Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl" />
          <div className="aspect-square w-full rounded-xl border bg-card shadow-sm md:aspect-[4/3]" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto mt-20 max-w-5xl">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-3 text-muted-foreground">
          Enthusiastic and detail-oriented Computer Science Engineering postgraduate with strong knowledge of Java, Python, SQL, HTML, CSS, JavaScript, Node.js. Skilled in web development, workflow automation, and digital forensics.
        </p>
        <p className="mt-2 text-muted-foreground">
          Strengths: Quick learner, adaptable, analytical mindset.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Java, Python, SQL, HTML, CSS, JavaScript</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Node.js</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Databases</CardTitle>
            </CardHeader>
            <CardContent>
              <p>SQL, MySQL, Firebase, Supabase</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Git, VS Code, Canva, Builder.io, n8n</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cyber Forensics</CardTitle>
            </CardHeader>
            <CardContent>
              <p>EnCase, FTK Imager, Autopsy</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Cybersecurity & Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Nmap, Wireshark | OOP, DBMS, Digital Forensics</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto mt-16 max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between gap-4">
                <p className="text-muted-foreground">{p.summary}</p>
                <div className="flex items-center gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>View Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{p.title}</DialogTitle>
                        <DialogDescription className="pt-2 text-base leading-relaxed text-foreground">
                          {p.details}
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                  <a
                    href={`https://github.com/search?q=${encodeURIComponent(p.title)}+user%3AGnaneshwari3001&type=repositories`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline">View Project</Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">NxtWave (Mentor)</CardTitle>
            </CardHeader>
            <CardContent>
              Mentored students in full-stack development.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cognizant (Intern)</CardTitle>
            </CardHeader>
            <CardContent>Worked on Procurement System.</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">CFSL (Digital Forensics Intern)</CardTitle>
            </CardHeader>
            <CardContent>Hands-on forensic investigations.</CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M.Tech CSE — JNTUH</CardTitle>
            </CardHeader>
            <CardContent>2023–present</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">B.Tech CSE — MGIT</CardTitle>
            </CardHeader>
            <CardContent>2019–2022</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Diploma CSE — Govt. Institute of Electronics</CardTitle>
            </CardHeader>
            <CardContent>2015–2018</CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="mt-3 text-muted-foreground">
          <p>Email: <a className="underline" href="mailto:gnaneshwarisarla001@gmail.com">gnaneshwarisarla001@gmail.com</a></p>
          <p>Phone: <a className="underline" href="tel:+919573503001">+91-9573503001</a></p>
          <p>
            LinkedIn: <a className="underline" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gnaneshwarisarala3001/">linkedin.com/in/gnaneshwarisarala3001</a>
          </p>
          <p>
            GitHub: <a className="underline" target="_blank" rel="noreferrer" href="https://github.com/Gnaneshwari3001">github.com/Gnaneshwari3001</a>
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-3">
          <div className="grid gap-2 md:grid-cols-2">
            <Input name="name" placeholder="Your name" required />
            <Input name="email" type="email" placeholder="Your email" required />
          </div>
          <Textarea name="message" placeholder="Your message" required rows={6} />
          <div className="flex items-center gap-3">
            <Button disabled={sending} type="submit">
              {sending ? "Sending..." : "Send Message"}
            </Button>
            <a className="text-sm underline" href="mailto:gnaneshwarisarla001@gmail.com">
              Or email directly
            </a>
          </div>
          {status && (
            <p className="text-sm text-muted-foreground">{status}</p>
          )}
        </form>
      </section>
    </div>
  );
}
