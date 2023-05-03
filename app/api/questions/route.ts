// lib
import { NextResponse } from 'next/server'
import questions from './questions'

export async function GET() {
  return NextResponse.json(questions)
}
