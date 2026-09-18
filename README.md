# One Bridge Labs — preview site

Preview-only marketing site for [One Bridge Labs](https://onebridgelabs.com). It is not the live website. Proposed prices are labeled and there is no checkout.

This preview follows the live site’s practical voice: train the team, build a system, start with one bottleneck. The homepage opening copy is fixed as specified. The working example uses fictional Meridian Field Services data and is labeled sample/scripted.

## Run locally

```bash
npm install
npm run dev -- --port 44721
```

Open [http://127.0.0.1:44721](http://127.0.0.1:44721).

```bash
npm run build
npm start -- --port 44721
```

## What’s in this preview

- Homepage with the required headline, supporting line, closing line, and two working buttons
- Train / Build offerings: who it helps, what they get, what they provide, how delivery works
- Flagship Business Knowledge Assistant for employee onboarding (approved docs, citations, handoff)
- Labeled fictional demo with sample questions, source-backed answers, and one unanswered example
- Assessment package with proposed pricing and a suggested build credit for review
- Credibility placeholders that list what is still needed from Jon
- Ongoing support that keeps the live retainer price unchanged
- Inquiry form that `POST`s to `/api/inquiry` (stub) and offers `sales@onebridgelabs.com`

## What this preview does not do

- Invent testimonials, logos, credentials, or security claims
- Invent live prices or run checkout
- Change the published Training Sprint, Workflow Buildout, or Optimization Retainer prices from onebridgelabs.com
- Index in search engines (`robots: noindex`)

## Review

Open `/review` for decisions still with Jon (assessment price, credit, bio, customer examples, support limits).
