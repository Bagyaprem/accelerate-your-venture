-- Enable Row Level Security on registrations table
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public access for inserting registrations (since no auth needed)
CREATE POLICY "Allow public registration submissions" 
ON public.registrations 
FOR INSERT 
TO public 
WITH CHECK (true);

-- Create policy to allow public read access (for admin purposes if needed)
CREATE POLICY "Allow public read access to registrations" 
ON public.registrations 
FOR SELECT 
TO public 
USING (true);