"use client";

import React, { useState, useEffect } from "react";
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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, RefreshCw, Send } from "lucide-react";
import { faker } from "@faker-js/faker";

// Simulated LLM function to generate more complex data
const generateComplexData = () => {
  const conditions = [
    "Hypertension",
    "Diabetes Type 2",
    "Asthma",
    "Rheumatoid Arthritis",
    "Migraine",
  ];
  const specialties = [
    "Cardiology",
    "Endocrinology",
    "Pulmonology",
    "Rheumatology",
    "Neurology",
  ];
  const selectedCondition =
    conditions[Math.floor(Math.random() * conditions.length)];

  return {
    referralReason: `Consultation and management of ${selectedCondition}`,
    specialty: specialties[Math.floor(Math.random() * specialties.length)],
    urgency: ["routine", "urgent", "emergency"][Math.floor(Math.random() * 3)],
  };
};

// Function to generate synthetic data
const generateSyntheticData = () => {
  const complexData = generateComplexData();
  return {
    patient_first_name: faker.person.firstName(),
    patient_last_name: faker.person.lastName(),
    patient_medicare_number: faker.string.numeric(10),
    patient_gender: faker.person.sex(),
    patient_address_line_1: faker.location.streetAddress(),
    patient_city: faker.location.city(),
    patient_postcode: faker.location.zipCode(),
    patient_state: faker.location.state(),
    patient_dob: faker.date
      .birthdate({ min: 18, max: 90, mode: "age" })
      .toISOString()
      .split("T")[0],
    patient_phone_mobile: faker.phone.number(),
    patient_phone_home: faker.phone.number(),
    patient_email: faker.internet.email(),
    patient_dva_number: faker.string.alphanumeric(9).toUpperCase(),
    patient_carer_name: faker.person.fullName(),
    patient_carer_phone: faker.phone.number(),
    patient_carer_email: faker.internet.email(),
    patient_carer_relationship: faker.helpers.arrayElement([
      "Spouse",
      "Child",
      "Sibling",
      "Friend",
    ]),
    practitioner_first_name: faker.person.firstName(),
    practitioner_last_name: faker.person.lastName(),
    practitioner_npi: faker.string.numeric(10),
    practice_name: faker.company.name() + " Medical Center",
    practice_identifier: faker.string.alphanumeric(8).toUpperCase(),
    practice_address: faker.location.streetAddress(),
    practice_email: faker.internet.email(),
    practice_phone: faker.phone.number(),
    practice_edi_system: faker.helpers.arrayElement([
      "MedicalDirector",
      "Best Practice",
      "Genie",
      "ZedMed",
    ]),
    practice_edi_id: faker.string.alphanumeric(10).toUpperCase(),
    referrer_medicare_provider_number: faker.string
      .alphanumeric(8)
      .toUpperCase(),
    ...complexData,
  };
};

export default function AusbizMedicalEReferralSandbox() {
  const [referralData, setReferralData] = useState(generateSyntheticData());
  const [showJsonView, setShowJsonView] = useState(false);
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setReferralData({ ...referralData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setReferralData({ ...referralData, [name]: value });
  };

  const generateNewData = () => {
    setReferralData(generateSyntheticData());
  };

  const generateFHIRPayload = () => {
    return JSON.stringify(
      {
        resourceType: "ServiceRequest",
        id: `referral-${faker.string.uuid()}`,
        status: "active",
        intent: "order",
        priority: referralData.urgency,
        subject: {
          reference: `Patient/${faker.string.uuid()}`,
          display: `${referralData.patient_first_name} ${referralData.patient_last_name}`,
        },
        code: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "306206005",
              display: "Referral to service",
            },
          ],
          text: referralData.referralReason,
        },
        specialty: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "394582007",
              display: referralData.specialty,
            },
          ],
        },
        occurrenceDateTime: new Date().toISOString(),
        requester: {
          reference: `Practitioner/${faker.string.uuid()}`,
          display: `${referralData.practitioner_first_name} ${referralData.practitioner_last_name}`,
        },
        reasonCode: [
          {
            coding: [
              {
                system: "http://snomed.info/sct",
                code: "404684003",
                display: referralData.referralReason,
              },
            ],
            text: referralData.referralReason,
          },
        ],
        contained: [
          {
            resourceType: "Patient",
            id: faker.string.uuid(),
            name: [
              {
                use: "official",
                family: referralData.patient_last_name,
                given: [referralData.patient_first_name],
              },
            ],
            gender: referralData.patient_gender,
            birthDate: referralData.patient_dob,
            address: [
              {
                use: "home",
                type: "physical",
                line: [referralData.patient_address_line_1],
                city: referralData.patient_city,
                state: referralData.patient_state,
                postalCode: referralData.patient_postcode,
              },
            ],
            telecom: [
              {
                system: "phone",
                value: referralData.patient_phone_mobile,
                use: "mobile",
              },
              {
                system: "phone",
                value: referralData.patient_phone_home,
                use: "home",
              },
              {
                system: "email",
                value: referralData.patient_email,
              },
            ],
            identifier: [
              {
                system: "http://ns.electronichealth.net.au/id/medicare-number",
                value: referralData.patient_medicare_number,
              },
              {
                system: "http://ns.electronichealth.net.au/id/dva",
                value: referralData.patient_dva_number,
              },
            ],
          },
          {
            resourceType: "Practitioner",
            id: faker.string.uuid(),
            name: [
              {
                use: "official",
                family: referralData.practitioner_last_name,
                given: [referralData.practitioner_first_name],
              },
            ],
            identifier: [
              {
                system: "http://hl7.org/fhir/sid/us-npi",
                value: referralData.practitioner_npi,
              },
              {
                system:
                  "http://ns.electronichealth.net.au/id/medicare-provider-number",
                value: referralData.referrer_medicare_provider_number,
              },
            ],
          },
          {
            resourceType: "Organization",
            id: faker.string.uuid(),
            name: referralData.practice_name,
            identifier: [
              {
                system: "http://ns.electronichealth.net.au/id/hi/hpio/1.0",
                value: referralData.practice_identifier,
              },
            ],
            telecom: [
              {
                system: "phone",
                value: referralData.practice_phone,
              },
              {
                system: "email",
                value: referralData.practice_email,
              },
            ],
            address: [
              {
                use: "work",
                type: "physical",
                text: referralData.practice_address,
              },
            ],
          },
        ],
      },
      null,
      2
    );
  };

  const handleSendReferral = async () => {
    setIsLoading(true);
    setApiResponse("Sending referral...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setApiResponse(
      JSON.stringify(
        {
          resourceType: "OperationOutcome",
          id: `response-${new Date().getTime()}`,
          issue: [
            {
              severity: "information",
              code: "informational",
              diagnostics: `Referral for patient ${referralData.patient_first_name} ${referralData.patient_last_name} (Medicare: ${referralData.patient_medicare_number}) successfully processed and stored.`,
            },
          ],
        },
        null,
        2
      )
    );
    setIsLoading(false);
  };

  useEffect(() => {
    generateNewData();
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Ausbiz Medical eReferral Sandbox
          </CardTitle>
          <CardDescription>
            Generate, edit, and send FHIR-compliant referrals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center">
            <Button
              onClick={generateNewData}
              className="flex items-center space-x-2"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Generate Synthetic Data</span>
            </Button>
            <div className="flex items-center space-x-2">
              <Label htmlFor="json-view">JSON View</Label>
              <Switch
                id="json-view"
                checked={showJsonView}
                onCheckedChange={setShowJsonView}
              />
            </div>
          </div>

          {showJsonView ? (
            <Textarea
              value={generateFHIRPayload()}
              readOnly
              className="font-mono text-sm h-[500px]"
            />
          ) : (
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="patient_first_name">Patient First Name</Label>
                  <Input
                    id="patient_first_name"
                    name="patient_first_name"
                    value={referralData.patient_first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_last_name">Patient Last Name</Label>
                  <Input
                    id="patient_last_name"
                    name="patient_last_name"
                    value={referralData.patient_last_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_medicare_number">
                    Medicare Number
                  </Label>
                  <Input
                    id="patient_medicare_number"
                    name="patient_medicare_number"
                    value={referralData.patient_medicare_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_gender">Gender</Label>
                  <Select
                    name="patient_gender"
                    value={referralData.patient_gender}
                    onValueChange={(value) =>
                      handleSelectChange("patient_gender", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="patient_dob">Date of Birth</Label>
                  <Input
                    id="patient_dob"
                    name="patient_dob"
                    type="date"
                    value={referralData.patient_dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_address_line_1">Address</Label>
                  <Input
                    id="patient_address_line_1"
                    name="patient_address_line_1"
                    value={referralData.patient_address_line_1}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_city">City</Label>
                  <Input
                    id="patient_city"
                    name="patient_city"
                    value={referralData.patient_city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_state">State</Label>
                  <Input
                    id="patient_state"
                    name="patient_state"
                    value={referralData.patient_state}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="patient_postcode">Postcode</Label>
                  <Input
                    id="patient_postcode"
                    name="patient_postcode"
                    value={referralData.patient_postcode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="practitioner_first_name">
                    Practitioner First Name
                  </Label>
                  <Input
                    id="practitioner_first_name"
                    name="practitioner_first_name"
                    value={referralData.practitioner_first_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="practitioner_last_name">
                    Practitioner Last Name
                  </Label>
                  <Input
                    id="practitioner_last_name"
                    name="practitioner_last_name"
                    value={referralData.practitioner_last_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="practitioner_npi">Practitioner NPI</Label>
                  <Input
                    id="practitioner_npi"
                    name="practitioner_npi"
                    value={referralData.practitioner_npi}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="practice_name">Practice Name</Label>
                  <Input
                    id="practice_name"
                    name="practice_name"
                    value={referralData.practice_name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="practice_identifier">
                    Practice Identifier
                  </Label>
                  <Input
                    id="practice_identifier"
                    name="practice_identifier"
                    value={referralData.practice_identifier}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="referralReason">Referral Reason</Label>
                  <Textarea
                    id="referralReason"
                    name="referralReason"
                    value={referralData.referralReason}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="specialty">Specialty</Label>
                  <Input
                    id="specialty"
                    name="specialty"
                    value={referralData.specialty}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <Label htmlFor="urgency">Urgency</Label>
                  <Select
                    name="urgency"
                    value={referralData.urgency}
                    onValueChange={(value) =>
                      handleSelectChange("urgency", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="routine">Routine</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="emergency">Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSendReferral} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Referral
              </>
            )}
          </Button>
        </CardFooter>
      </Card>

      {apiResponse && (
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>API Response</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={apiResponse}
              readOnly
              className="font-mono text-sm h-[200px]"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
