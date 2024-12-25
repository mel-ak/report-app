'use client';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', reports: 4 },
  { name: 'Feb', reports: 6 },
  { name: 'Mar', reports: 8 },
  { name: 'Apr', reports: 3 },
];

const ReportChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reports Overview</CardTitle>
        <CardDescription>Monthly report statistics</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="reports" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ReportChart;
