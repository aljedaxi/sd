plus-x:
	@find . | grep -v .git | grep -v Makefile | xargs chmod +x

.PHONY: plus-x
