"use client";

import { ArrowBack } from "@nine-thirty-five/material-symbols-react/rounded";

import { M3eButton } from "@m3e/react/button";
import { M3eContentPane } from "@m3e/react/content-pane";
import { M3eDivider } from "@m3e/react/divider";
import { M3eHeading } from "@m3e/react/heading";

export default function PrivacyPolicy() {
	return (
		<div
			style={{
				color: "var(--md-sys-color-on-surface)",
				display: "flex",
				flexDirection: "column",
				gap: "2.5rem",
				padding: "4rem 2rem",
			}}
		>
			<div>
				<M3eButton href="/" size="small" variant="tonal">
					<ArrowBack slot="icon" />
					Back to Home
				</M3eButton>
			</div>
			<M3eContentPane
				style={{
					"--m3e-content-pane-container-color":
						"var(--md-sys-color-surface-container-lowest)",
					maxWidth: "800px",
					margin: "0 auto",
				}}
			>
				<M3eHeading emphasized variant="display">
					Privacy Policy
				</M3eHeading>
				<p>
					This Privacy Policy applies to all products and services
					operated by the Monocons project, including the Monocons
					Android app, Monocons for GNOME, the Monocons Icon Request
					Dashboard, and our website.
				</p>
				<p>
					These products are published by Kaustubh Ladiya at no cost
					and are intended for use as is.
				</p>
				<p>
					We will not use or share your information with anyone except
					as described in this Privacy Policy.
				</p>

				<M3eHeading emphasized size="medium" variant="headline">
					How We Handle Your Data
				</M3eHeading>
				<M3eDivider />
				<p>
					We take precautions to ensure your data is safe from
					unauthorized access, sharing, or changes. We process your
					data using secure systems in compliance with GDPR’s
					principles of lawfulness, fairness, and transparency.
				</p>
				<ol
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							What Information We Collect
						</M3eHeading>
						<M3eDivider />
						<p>
							By default, we believe in a privacy-first
							configuration.{" "}
							<strong>
								We do not operate any proprietary server that
								collects, tracks, or stores personal data or
								usage metrics.
							</strong>
						</p>
						<p>
							We only process data when you explicitly interact
							with our tools or community channels:
						</p>
						<ul>
							<li>
								<strong>Icon Requests:</strong> When you
								voluntarily request new icons through the
								Monocons Android app, an email is generated and
								sent to our project inbox containing your email
								address, basic device metadata, and a ZIP
								archive with the technical component IDs and raw
								icons of the requested apps.
							</li>
							<li>
								<strong>GitHub Contributions & Issues:</strong>{" "}
								If you submit bug reports, pull requests, or
								icon contributions on GitHub, your public GitHub
								profile information (such as username and
								avatar) is displayed in our repository and
								within the app&apos;s Contributors section.
							</li>
						</ul>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							IP Addresses, Local Storage & Cookies
						</M3eHeading>
						<M3eDivider />
						<p>
							Our website does not use tracking cookies or collect
							any Personally Identifiable Information (PII). We
							utilize your browser&apos;s native{" "}
							<code>localStorage</code> strictly to cache daily
							wallpaper IDs and icon showcase lists locally on
							your device to improve page load performance.
						</p>
						<p>
							When you access our website, request dashboard, or
							in-app network features, underlying network
							infrastructure hosts (such as Vercel, GitHub, and
							Picsum Photos) temporarily process your IP address
							strictly to route web traffic, serve images, and
							safeguard against malicious attacks.
						</p>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Where Your Data is Processed
						</M3eHeading>
						<M3eDivider />
						<p>
							Because we do not run proprietary databases, any
							data you intentionally send to us is processed
							through established global platforms. Website and
							dashboard routing rely on Vercel and distributed
							Content Delivery Networks (CDNs).
						</p>
						<p>
							Icon requests are received and held securely within
							Google’s Gmail infrastructure. App updates,
							contributor metadata, and source code management are
							handled via GitHub.
						</p>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Legal Basis for Data Processing
						</M3eHeading>
						<M3eDivider />
						<p>
							Under international laws like the GDPR, data
							processing requires a valid legal basis. We process
							data under the following criteria:
						</p>
						<ul>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									Consent:
								</strong>{" "}
								When you explicitly send an icon request email
								or submit an issue/pull request on GitHub.
							</li>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									Legitimate Interests:
								</strong>{" "}
								To maintain website security, prevent network
								abuse, and fulfill icon requests you explicitly
								trigger.
							</li>
						</ul>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Detailed Information on Data Processing
						</M3eHeading>
						<M3eDivider />
						<p>
							Our tools interact directly with standard external
							services to function. When using specific features,
							data routes outside our direct environment:
						</p>
						<ul>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									Standard Android Build:
								</strong>{" "}
								Fetching announcements, icon request
								configurations, or live contributor lists
								establishes a direct connection with public
								network APIs (such as GitHub and our website
								infrastructure).
							</li>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									IzzyOnDroid / FOSS Build:
								</strong>{" "}
								The IzzyOnDroid build variant of Monocons does
								not request the <code>INTERNET</code>{" "}
								permission, operates 100% offline using bundled
								local assets, and makes zero network
								connections.
							</li>
						</ul>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Data Retention
						</M3eHeading>
						<M3eDivider />
						<p>
							We enforce strict lifecycles on the minimal data we
							receive:
						</p>
						<ul>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									Identifiable Email Records:
								</strong>{" "}
								Emails submitted via icon requests are
								permanently deleted from our inbox within 1
								month of processing.
							</li>
							<li>
								<strong
									style={{
										color: "var(--md-sys-color-on-surface)",
									}}
								>
									Technical App Data:
								</strong>{" "}
								Requested app names, component IDs, and
								extracted app icons are stripped of all personal
								user context and aggregated completely
								anonymously into our public Icon Request
								Dashboard and open-source GitHub repositories.
							</li>
						</ul>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Your Rights (Global Data Privacy Rights)
						</M3eHeading>
						<M3eDivider />
						<p>
							Depending on your location (such as the EU or
							California), you maintain legal rights regarding
							access, rectification, erasure, and porting of your
							personal data.
						</p>
						<p>
							Because Monocons does not manage user profiles or
							store historical data tied to identity on
							proprietary servers, our structural capacity to look
							up or delete historical records is limited to
							unprocessed emails in our request inbox. If you wish
							to exercise your rights regarding email
							communications, please reach out via Section 9.
						</p>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Changes to This Policy
						</M3eHeading>
						<M3eDivider />
						<p>
							We may modify this policy at our discretion to match
							project updates or legal shifts. It is recommended
							to check this page periodically, referring to the
							last updated date listed at the top.
						</p>
					</li>
					<li>
						<M3eHeading emphasized size="medium" variant="headline">
							Contact Us
						</M3eHeading>
						<M3eDivider />
						<p>
							If you have any questions, suggestions, or concerns
							regarding your privacy, you can contact the
							maintainer at{" "}
							<a href="mailto:k4ustu3h@gmail.com">
								k4ustu3h@gmail.com
							</a>{" "}
							(or{" "}
							<a href="mailto:monoconsrequest@gmail.com">
								monoconsrequest@gmail.com
							</a>{" "}
							for icon request inquiries), or open an issue on our{" "}
							<a
								href="https://github.com/k4ustu3h/monocons-android/issues"
								rel="noopener noreferrer"
								target="_blank"
							>
								GitHub Issue Tracker
							</a>
							.
						</p>
					</li>
				</ol>
			</M3eContentPane>
		</div>
	);
}
