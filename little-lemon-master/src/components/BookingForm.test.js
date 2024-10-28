/*
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  // Assuming "Book a Table" is the heading in BookingPage.js
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the form labels in BookingForm', () => {
  render(<BookingForm />);
  // Checking for static text in labels like "Choose date"
  const dateLabel = screen.getByText("Choose date");
  const timeLabel = screen.getByText("Choose time");
  const guestsLabel = screen.getByText("Number of guests");
  const occasionLabel = screen.getByText("Occasion");
  
  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
});
*/
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

// Step 1: Validate HTML5 validation is applied
describe('BookingForm HTML5 validation', () => {
  test('has required attributes for form inputs', () => {
    render(<BookingForm />);
    
    // Check the date input
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');

    // Check the time select
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    // Check the guests input
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
    expect(guestsInput).toHaveAttribute('required');

    // Check the occasion select
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });
});

// Step 2: Add unit tests for JavaScript validation functions
describe('BookingForm JavaScript validation', () => {
  let component;

  beforeEach(() => {
    component = render(<BookingForm />);
  });

  test('validates form inputs correctly', () => {
    // Simulate valid inputs
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Set valid inputs
    fireEvent.change(dateInput, { target: { value: '2024-10-30' } });
    fireEvent.change(timeSelect, { target: { value: '19:00' } });
    fireEvent.change(guestsInput, { target: { value: '2' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

    // Validate form
    component.validateForm();
    expect(component.isFormValid).toBe(true); // Assuming you set isFormValid in the component
  });

  test('invalidates form inputs correctly', () => {
    // Simulate invalid inputs
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);

    // Set invalid inputs
    fireEvent.change(dateInput, { target: { value: '' } }); // Empty date
    fireEvent.change(timeSelect, { target: { value: '' } }); // No time selected
    fireEvent.change(guestsInput, { target: { value: '0' } }); // Invalid number of guests
    fireEvent.change(occasionSelect, { target: { value: '' } }); // No occasion selected

    // Validate form
    component.validateForm();
    expect(component.isFormValid).toBe(false);
  });
});

