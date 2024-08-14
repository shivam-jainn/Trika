"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function Page() {
  const [emailCredentials, setEmailCredentials] = useState({
    email: "",
    password: "",
  });

  const [setupOptions, setSetupOptions] = useState({
    smtpSelected: false,
    imapSelected: false,
    smtpHostLink: "",
    smtpPort: "",
    imapHostLink: "",
    imapPort: "",
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCredentials({
      ...emailCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setSetupOptions({
      ...setupOptions,
      [name]: checked,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSetupOptions({
      ...setupOptions,
      [name]: name.includes("Port") ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const setupData = {
      email: emailCredentials.email,
      password: emailCredentials.password,
      smtpHostLink: setupOptions.smtpHostLink,
      smtpPort: setupOptions.smtpPort,
      imapHostLink: setupOptions.imapHostLink,
      imapPort: setupOptions.imapPort,
    };

    try {
      const response = await fetch("http://localhost:3010/settings/init/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(setupData),
      });

      if (!response.ok) {
        throw new Error("Failed to save setup");
      }

      const data = await response.json();
      console.log("Success:", data);
      // Handle success (e.g., show a success message or reset the form)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="space-y-8">
      {/* Add Emails Card */}
      <Card>
        <CardHeader>
          <CardTitle>Add Emails</CardTitle>
          <CardDescription>Add your email credentials.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Input
              name="email"
              placeholder="Email"
              value={emailCredentials.email}
              onChange={handleEmailChange}
              className="w-full"
            />
            <Input
              name="password"
              placeholder="Password"
              value={emailCredentials.password}
              onChange={handleEmailChange}
              className="w-full"
              type="password"
            />

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="smtpSelected"
                  checked={setupOptions.smtpSelected}
                  onChange={handleOptionChange}
                />
                <span>Setup SMTP</span>
              </label>

              {setupOptions.smtpSelected && (
                <div className="mt-2 space-y-2">
                  <Input
                    name="smtpHostLink"
                    placeholder="SMTP Host Link"
                    value={setupOptions.smtpHostLink}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <Input
                    name="smtpPort"
                    placeholder="SMTP Port"
                    value={setupOptions.smtpPort}
                    onChange={handleInputChange}
                    className="w-full"
                    type="number"
                  />
                </div>
              )}
            </div>

            <div className="mt-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="imapSelected"
                  checked={setupOptions.imapSelected}
                  onChange={handleOptionChange}
                />
                <span>Setup IMAP</span>
              </label>

              {setupOptions.imapSelected && (
                <div className="mt-2 space-y-2">
                  <Input
                    name="imapHostLink"
                    placeholder="IMAP Host Link"
                    value={setupOptions.imapHostLink}
                    onChange={handleInputChange}
                    className="w-full"
                  />
                  <Input
                    name="imapPort"
                    placeholder="IMAP Port"
                    value={setupOptions.imapPort}
                    onChange={handleInputChange}
                    className="w-full"
                    type="number"
                  />
                </div>
              )}
            </div>

            <CardFooter className="border-t px-6 py-4 flex justify-end">
              <Button type="submit">Save</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
