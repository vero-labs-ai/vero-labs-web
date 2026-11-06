#!/usr/bin/env python3
"""Make a private /for/<company>-<code>/ page from for/_template.html.

Usage:  python3 tools/make_for_page.py tools/for-accounts.json [slug ...]
Each account in the JSON list needs: company, slug, headline, intro, noticed (list of
sentences), week (list), need (list), proof ("whatsapp" | "qcom" | "labelling"),
optional proof_line, optional snapshot_html (raw HTML section), optional code.
Pages are noindex and not in the sitemap. The random code in the URL stops people guessing it.
Prints each page's URL; send it with ?src=li / em / wa.
"""
import html, json, os, secrets, sys
from datetime import date
from string import Template

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROOF = {
    "whatsapp": ("../../work/whatsapp-purchase-agent/", "WhatsApp agent for a listed IT hardware refurbisher",
                 "Reads traders' offers, asks for what's missing in one message, prices against the buying sheet, hands every deal to a buyer."),
    "qcom": ("../../work/quick-commerce-rank-tracker/", "Blinkit rank and ad tracker for a regional food brand",
             "Search rank and sponsored slots every 10 minutes, with Telegram alerts when a product drops below target."),
    "labelling": ("../../work/qc-photo-labelling/", "Photo labelling for device quality checks",
                  "QC staff label defects inside the tools they already use, building data for a vision model."),
}

def li(items):
    return "".join("<li>%s</li>" % html.escape(x) for x in items)

def main():
    accounts = json.load(open(sys.argv[1]))
    only = set(sys.argv[2:])
    tpl = Template(open(os.path.join(ROOT, "for", "_template.html")).read())
    for a in accounts:
        if only and a["slug"] not in only:
            continue
        code = a.get("code") or secrets.token_hex(2)
        href, title, line = PROOF[a["proof"]]
        page = tpl.substitute(
            company=html.escape(a["company"]), date=date.today().strftime("%d %b %Y"),
            headline=html.escape(a["headline"]), intro=html.escape(a["intro"]),
            noticed="".join("<p>%s</p>" % html.escape(x) for x in a["noticed"]),
            week=li(a["week"]), need=li(a["need"]),
            snapshot=a.get("snapshot_html", ""),
            proof_href=href, proof_title=html.escape(title), proof_line=html.escape(a.get("proof_line", line)),
        )
        out = os.path.join(ROOT, "for", "%s-%s" % (a["slug"], code))
        os.makedirs(out, exist_ok=True)
        open(os.path.join(out, "index.html"), "w").write(page)
        print("https://vero.co.in/for/%s-%s/" % (a["slug"], code))

if __name__ == "__main__":
    main()
